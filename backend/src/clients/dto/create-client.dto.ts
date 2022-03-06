
import {IsEmail, IsNotEmpty, IsString, IsNumber} from 'class-validator';
export class CreateClientDto {
  
    @IsString()
    title: string;


    @IsString()
    name: string;


    @IsString()
    surname: string;


    @IsString()
    email: string;


    @IsString()
    address: string;


    @IsNumber()
    telephone: string;


    @IsString()
    login: string;


    @IsString()
    password: string;

  

}
