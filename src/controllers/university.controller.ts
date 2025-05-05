import { Body, Controller, Get, HttpCode, Param, Post, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { CreatePerguntaDto } from "src/dto/faculdades/create-ask.dto";
import { CreateUniversityDto } from "src/dto/faculdades/create-university.dto";
import { UniversityService } from "src/service/university.service";

@Controller('university')
@UseGuards(AuthGuard('jwt'))
export class UniversityController {
    constructor(private readonly universityService:UniversityService){}
    @Post()
    @HttpCode(201)
    async createUniversity(@Body() createUniversity:CreateUniversityDto){
        return this.universityService.createUniversity(createUniversity);
    }

    @Get()
    @HttpCode(200)
    async getAllUniversity(){
        return this.universityService.getAllUniversitys();
    }

    @Post('ask')
    @HttpCode(201)
    async criarPergunta(@Body() createPerguntaDto: CreatePerguntaDto) {
      return this.universityService.createAskAndOptions(createPerguntaDto);
    }

    @Get(':id_faculdade')
    @HttpCode(200)
    async listarPerguntas(@Param('id_faculdade') idFaculdade: string) {
        return this.universityService.getAllTasksForUniversitys(idFaculdade);
    }
}