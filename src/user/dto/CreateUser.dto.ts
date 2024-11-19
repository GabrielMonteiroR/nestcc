import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';
import { IsUniqueEmail } from 'src/validators/isUniqueEmail.validator';

export class CreateUserDTO {
  @IsNotEmpty({ message: 'Name can not be null.' })
  name: string;

  @IsEmail(undefined, { message: 'Need to be a format valid email.' })
  @IsUniqueEmail({ message: 'Email alredy exists' })
  email: string;

  @IsString()
  @MinLength(6, { message: 'Password need to have 6 characters.' })
  password: string;
}
