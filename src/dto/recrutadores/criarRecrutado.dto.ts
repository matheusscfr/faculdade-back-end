import { IsNotEmpty, IsString, Matches } from "class-validator";

export class CriarRecrutadorDto{   
    @IsNotEmpty() 
    @IsString()
    nome: string;

    @IsNotEmpty() 
    @IsString()
    email: string;

    @IsNotEmpty() 
    @IsString()
    senha: string;

    @IsNotEmpty() 
    @IsString()
    cargo: string;

    @IsNotEmpty() 
    @IsString()
    telefone: string;

    @IsString()
    id_empresa: string;
}