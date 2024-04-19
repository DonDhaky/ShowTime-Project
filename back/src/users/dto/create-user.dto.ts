import { IsEmail, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  is_admin: string;

  @IsEmail()
  email: string;

  @IsString()
  password: string;

  @IsString()
  favorite_groups: string;

  @IsString()
  wishlist: string;

  @IsString()
  booked: string;

}