import { Body, Controller, Param, Post, Get, Put, Patch, Delete, NotFoundException } from '@nestjs/common';
import { UserService } from './users.service';
import { User } from './users.model';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UserController {
  constructor(private readonly UserService: UserService) {}

  //POST route
  @Post('/signup')
  async createUser(@Body() createUserDto: CreateUserDto) {
    const result = await this.UserService.createUser(createUserDto);
    return {
      msg: 'Concert successfully registered',
      result,
      end: 'message end'
    };
  }

  //GET routes
  @Get()
  async getConcerts(): Promise<User[]> {
    return await this.UserService.getUsers();
  }
  @Get(':id')
  async getUserById(@Param('id') id: string): Promise<User> {
    return await this.UserService.getUserById(id);
  }
  @Get('/byemail/:email')
  async getUserByEmail(@Param('email') email: string): Promise<User> {
    return await this.UserService.getUserByEmail(email);
  }

  //UPDATE routes
  @Put(':id')
  async updateUser(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return await this.UserService.updateUser(id, updateUserDto);
  }
  @Patch(':id')
  async patchUser(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return await this.UserService.patchUser(id, updateUserDto);
  }

  //DELETE route
  @Delete(':id')
  async deleteUser(@Param('id') id: string): Promise<User> {
    return await this.UserService.deleteUser(id);
  }
}
