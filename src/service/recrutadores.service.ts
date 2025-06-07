import { ConflictException, Injectable, NotFoundException, UnauthorizedException } from "@nestjs/common";
import { CriarRecrutadorDto } from "src/dto/recrutadores/criarRecrutado.dto";
import { PrismaService } from "src/prisma/prisma.service";
import { compare, hash } from "bcryptjs";
import { loginRecrutadorDto } from "src/dto/recrutadores/login.dto";
import { JwtService } from "@nestjs/jwt";
import { OfertaContratacaoDto } from "src/dto/recrutadores/oferta-contratacao.dto";

@Injectable()
export class RecrutadoresService {

    constructor(private prisma:PrismaService,
        private jwtService: JwtService,
    ){}

    async createRecrutador(createRecrutadorDto: CriarRecrutadorDto) {
        await this.validarRecrutadorExistente(createRecrutadorDto.email);

        const passwordHash = await hash(createRecrutadorDto.senha, 8);
        return this.prisma.recrutador.create({
            data: {
                ...createRecrutadorDto,
                senha: passwordHash,
            }
        })
    }

    private async validarRecrutadorExistente(email: string){
        const recrutador = await this.prisma.recrutador.findUnique({
            where: { email }
        });
        if (recrutador) {
            throw new ConflictException('Recrutador já cadastrado');
        }
    }

    async validateRecrutador(email: string, senha: string): Promise<any> {
        const recrutador = await this.prisma.recrutador.findUnique({
            where: { email }
        });
        if (!recrutador) {
            throw new UnauthorizedException('Credenciais inválidas');
        }

        const passwordMatch = await compare(senha, recrutador.senha);
        if (!passwordMatch) {
            throw new UnauthorizedException('Credenciais inválidas');
        }

        const { senha: _, ...result } = recrutador;
        return result;
    }
    

    async login(loginDto: loginRecrutadorDto) {
        const recrutador = await this.validateRecrutador(loginDto.email, loginDto.senha);

        const payload = { 
            email: recrutador.email, 
            sub: recrutador.id_recrutador,
            nome: recrutador.nome,
            id_empresa: recrutador.id_empresa
        };

        return {
            access_token: this.jwtService.sign(payload),
            user: {
                id_recrutador: recrutador.id_recrutador,
                nome: recrutador.nome,
                email: recrutador.email,
                id_empresa: recrutador.id_empresa
            }
        };
    }

    async getRecrutador(id: string){
        const recrutador = await this.prisma.recrutador.findUnique({
            where: { id_recrutador: id }
        });
        if (!recrutador) {
            throw new NotFoundException('Recrutador não encontrado');
        }
        return recrutador;
    }

    async getAllRecrutadores(){
        return this.prisma.recrutador.findMany();
    }

    async oferecerContratacao(id_recrutador: string, ofertaDto: OfertaContratacaoDto) {
        // Verificar se o aluno existe
        const aluno = await this.prisma.aluno.findUnique({
            where: { id_aluno: ofertaDto.id_aluno }
        });

        if (!aluno) {
            throw new NotFoundException('Aluno não encontrado');
        }

        // Criar a contratação
        const contratacao = await this.prisma.contratacao.create({
            data: {
                id_recrutador,
                id_aluno: ofertaDto.id_aluno,
                cargo: ofertaDto.cargo,
                salario: ofertaDto.salario,
                status: "PENDENTE"
            },
            include: {
                aluno: {
                    select: {
                        nome: true,
                        email: true,
                        curso: true
                    }
                }
            }
        });

        // Incrementar o contador de solicitações do aluno
        await this.prisma.aluno.update({
            where: { id_aluno: ofertaDto.id_aluno },
            data: { solicitacoes: { increment: 1 } }
        });

        return contratacao;
    }

}
