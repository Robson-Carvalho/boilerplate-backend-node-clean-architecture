import { IsString, IsDate } from 'class-validator';

export class CreateUserDto {
  @IsString()
  name!: string;

  @IsString()
  email!: string;

  @IsDate()
  createdDate!: Date;
}
