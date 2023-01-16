import {
  IsEmail,
  IsNotEmpty,
  IsString,
  IsStrongPassword,
  Length,
} from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  @IsNotEmpty()
  public email: string;

  @IsStrongPassword()
  @IsNotEmpty()
  public password: string;

  @Length(2, 20)
  @IsNotEmpty()
  public firstName: string;

  @Length(2, 20)
  @IsNotEmpty()
  public lastName: string;

  @IsString()
  public image: string;
}
