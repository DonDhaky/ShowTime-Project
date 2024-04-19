import { IsEmail, IsOptional, IsString } from 'class-validator';

export class UpdateUserDto {
  @IsOptional()
  @IsString()
  is_admin?: string;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  @IsString()
  password?: string;

  @IsOptional()
  @IsString({each: true})
  wishlist?: string[];

  @IsOptional()
  @IsString({each: true})
  notify?: string[];

  @IsOptional()
  @IsString({each: true})
  booked?: string[];
}
