import { Controller, Post, Body, HttpCode, Param, Get, UseGuards } from '@nestjs/common';
import { AlunoService } from '../service/aluno.service';
import { CriarAlunoDto } from '../dto/criar-aluno.dto';
import { CriarListaAlunosDto } from '../dto/criar-lista-alunos.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('aluno')
export class AlunoController {
    constructor(private readonly alunoService: AlunoService) {}

    @Post()
    @HttpCode(201)
    async criarAlunos(@Body() createListaAlunosDto: CriarListaAlunosDto) {
        return this.alunoService.criarListaAlunos(createListaAlunosDto);
    }

    @Get(':id')
    @HttpCode(200)
    @UseGuards(AuthGuard('jwt'))
    async listarAluno(@Param('id') id: string) {
        return this.alunoService.listarAluno(id);
    }

    @Get()
    @HttpCode(200)
    @UseGuards(AuthGuard('jwt'))
    async listarTodosAlunos() {
        return this.alunoService.listarTodosAlunos();
    }
} 