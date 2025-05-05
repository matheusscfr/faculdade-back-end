import { Injectable } from "@nestjs/common";
import { CreatePerguntaDto } from "src/dto/faculdades/create-ask.dto";
import { CreateUniversityDto } from "src/dto/faculdades/create-university.dto";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class UniversityService {

    constructor(private prisma:PrismaService){}

    async createUniversity(createUniversity:CreateUniversityDto){
        return this.prisma.faculdade.create({
            data:{
                ...createUniversity,
            }
        })
    }

    async getAllUniversitys(){
        return this.prisma.faculdade.findMany();
    }


    async createAskAndOptions(createPerguntaDto: CreatePerguntaDto) {
        const { id_faculdade, enunciado, opcoes } = createPerguntaDto;
    
        return this.prisma.pergunta.create({
          data: {
            id_faculdade,
            enunciado,
            data_criação: new Date(),
            opcoes: {
              create: opcoes.map(opcao => ({
                texto_resposta: opcao.texto_resposta,
                correta: opcao.correta,
              })),
            },
          },
          include: {
            opcoes: true, 
          },
        });
      }

    

}