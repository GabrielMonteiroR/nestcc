/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { UserRepository } from 'src/user/user.repository';

@Injectable()
@ValidatorConstraint({ async: true })
export class isUniqueEmailValidator implements ValidatorConstraintInterface {
  constructor(private usuarioRepository: UserRepository) {}

  async validate(
    value: any,
    validationArguments?: ValidationArguments,
  ): Promise<boolean> {
    const emailExists = await this.usuarioRepository.EmailExists(value);
    return !emailExists;
  }
}

export const IsUniqueEmail = (validationOptions: ValidationOptions) => {
  return (obj: object, property: string) => {
    registerDecorator({
      target: obj.constructor,
      propertyName: property,
      options: validationOptions,
      constraints: [],
      validator: isUniqueEmailValidator,
    });
  };
};
