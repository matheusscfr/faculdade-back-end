import { Injectable } from '@nestjs/common';
import { PrismaClient } from '../../generated/prisma';
import { CriarAlunoDto } from '../dto/criar-aluno.dto';
import { CriarListaAlunosDto } from '../dto/criar-lista-alunos.dto';

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

    async criarListaAlunos(criarListaAlunosDto: CriarListaAlunosDto) {
        const resultados: any[] = [];
        
        for (const alunoDto of criarListaAlunosDto.alunos) {
            const { aptidoes, ...dadosAluno } = alunoDto;
            
            const aluno = await this.prisma.aluno.create({
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
            
            resultados.push(aluno);
        }
        
        return {
            message: `${resultados.length} alunos criados com sucesso`,
            alunos: resultados
        };
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