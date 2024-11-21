import { IsNotEmpty } from 'class-validator';

export class createSportComplexDTO {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  location: string;
}
