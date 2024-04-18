import { IsEmail, IsOptional, IsString } from 'class-validator';

export class UpdateUserDto {
  @IsOptional()
  @IsString()
  is_admin?: string;

  @IsOptional()
  @IsString()
  username?: string;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  @IsString()
  password?: string;

  @IsOptional()
  @IsString()
  favorite_groups?: string;

  @IsOptional()
  @IsString()
  wishlist?: string;

  @IsOptional()
  @IsString()
  booked?: string;
}
