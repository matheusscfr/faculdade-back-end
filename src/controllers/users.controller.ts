import { Body, Controller, HttpCode, Post, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { CreateUserDto } from "src/dto/users/create-user.dto";
import { LoginDto } from "src/dto/users/login-user.dto";
import { UsersService } from "src/service/users.service";

@Controller('users')
export class UsersController {

    constructor(private readonly usersService:UsersService){}

    @Post()
    @HttpCode(201)
    @UseGuards(AuthGuard('jwt')) 
    async createUser(@Body() createUserDto:CreateUserDto){
        return this.usersService.createUser(createUserDto);
    }

    @Post('login')
    @HttpCode(200)
    async login(@Body() loginDto: LoginDto) {   
      return this.usersService.login(loginDto);
    }
}