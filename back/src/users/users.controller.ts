import { Body, Controller, Param, Post, Get, Put, Patch, Delete, NotFoundException } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './users.model';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
//import * as bcrypt from 'bcrypt';
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/signup')
  async createUser(@Body() createUserDto: CreateUserDto) {
      const result = await this.usersService.createUser(createUserDto);
      return {
        msg: 'Concert successfully registered',
        userId: result.id,
        userUsername: result.username,
        end: 'message end'
      };
    }

    @Get()
    async getConcerts(): Promise<User[]> {
      return await this.usersService.getUsers();
    }
    @Get(':id')
    async getUserById(@Param('id') id: string): Promise<User> {
      return await this.usersService.getUserById(id);
    }
    @Get('/byemail/:email')
    async getUserByEmail(@Param('email') email: string): Promise<User> {
      return await this.usersService.getUserByEmail(email);
    }

    @Put(':id')
    async updateUser(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
      return await this.usersService.updateUser(id, updateUserDto);
    }
    @Patch(':id')
    async patchUser(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
      return await this.usersService.patchUser(id, updateUserDto);
    }

    @Delete(':id')
    async deleteUser(@Param('id') id: string): Promise<User> {
        return await this.usersService.deleteUser(id);
    }
  }
