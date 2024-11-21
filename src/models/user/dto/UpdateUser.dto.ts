import { IsEmail, IsOptional, IsString, MinLength } from 'class-validator';

export class updateUserDTO {
  @IsOptional()
  name: string;

  @IsEmail(undefined, { message: 'Need to be a format valid email.' })
  @IsOptional()
  email: string;

  @IsString()
  @IsOptional()
  @MinLength(6, { message: 'Password need to have 6 characters.' })
  password: string;
}
