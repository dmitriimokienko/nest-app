import { IsEmail, IsString, IsStrongPassword, Length } from 'class-validator';

export class UpdateUserDto {
  @IsEmail()
  public email: string;

  @IsStrongPassword()
  public password: string;

  @Length(2, 20)
  public firstName: string;

  @Length(2, 20)
  public lastName: string;

  @IsString()
  public image: string;
}
