import { Injectable } from '@nestjs/common';
import { PrismaClient } from '../../generated/prisma';
import { CriarAlunoDto } from '../dto/criar-aluno.dto';

@Injectable()
export class AlunoService {
    private prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient();
    }

    async criarAluno(createAlunoDto: CriarAlunoDto) {
        const { aptidoes, ...dadosAluno } = createAlunoDto;

        return this.prisma.aluno.create({
            data: {
                ...dadosAluno,
                aptidoes: {
                    create: aptidoes
                }
            },
            include: {
                aptidoes: true
            }
        });
    }

    async listarAluno(id: string) {
        return this.prisma.aluno.findUnique({
            where: { id_aluno: id },
            include: {
                aptidoes: true
            }
        });
    }

    async listarTodosAlunos() {
        return this.prisma.aluno.findMany({
            include: {
                aptidoes: true
            }
        });
    }
    
} 