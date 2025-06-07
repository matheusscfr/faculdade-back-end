import { Body, Controller, Get, HttpCode, Param, Post, UseGuards, Request } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { CriarRecrutadorDto } from "src/dto/recrutadores/criarRecrutado.dto";
import { loginRecrutadorDto } from "src/dto/recrutadores/login.dto";
import { LoginDto } from "src/dto/users/login-user.dto";
import { OfertaContratacaoDto } from "src/dto/recrutadores/oferta-contratacao.dto";
import { RecrutadoresService } from "src/service/recrutadores.service";

@Controller('recrutadores')
export class RecrutadoresController {

    constructor(private readonly recrutadoresService: RecrutadoresService) {}

    @Post()
    @HttpCode(201)
    async createRecrutador(@Body() createRecrutadorDto: CriarRecrutadorDto) {
        return this.recrutadoresService.createRecrutador(createRecrutadorDto);
    }

    @Post('login')
    @HttpCode(200)
    async login(@Body() loginDto: loginRecrutadorDto) {   
      return this.recrutadoresService.login(loginDto);
    }

    @Get(':id')
    @HttpCode(200)
    @UseGuards(AuthGuard('jwt'))
    async getRecrutador(@Param('id') id: string) {
        return this.recrutadoresService.getRecrutador(id);
    }

    @Get()
    @HttpCode(200)
    @UseGuards(AuthGuard('jwt'))
    async getAllRecrutadores() {
        return this.recrutadoresService.getAllRecrutadores();
    }

    @Post('oferta-contratacao/:id_recrutador')
    @HttpCode(201)
    @UseGuards(AuthGuard('jwt'))
    async oferecerContratacao(
        @Param('id_recrutador') id_recrutador: string,
        @Body() ofertaDto: OfertaContratacaoDto
    ) {
        return this.recrutadoresService.oferecerContratacao(
            id_recrutador,
            ofertaDto
        );
    }
}
