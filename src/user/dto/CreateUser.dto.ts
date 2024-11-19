import { IsEmail, IsNotEmpty, IsString, Min, MinLength } from "class-validator";


export class CreateUserDTO {

   @IsNotEmpty({message: "Name can not be null."})
    name: string;

    @IsEmail(undefined, {message: "Need to be a format valid email."})
    email: string;

    @IsString()
    @MinLength(6, {message: "Password need to have 6 characters."})
    password: string;
}