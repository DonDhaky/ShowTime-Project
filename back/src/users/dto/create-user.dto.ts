import { IsEmail, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  is_admin: string;

  @IsEmail()
  email: string;

  @IsString()
  password: string;

  @IsString({ each: true})
  wishlist: string[];

  @IsString({ each: true})
  notify: string[];

  @IsString({ each: true})
  booked: string[];
}
