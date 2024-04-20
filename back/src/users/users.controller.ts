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
      msg: 'User successfully registered',
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
  @Get('/:id/wishlist')
  async getWishlistByUserId(@Param('id') id: string): Promise<any> {
    return await this.UserService.getWishlistByUserId(id);
  }
  @Get('/:id/notify')
  async getNotifyByUserId(@Param('id') id: string): Promise<any> {
    return await this.UserService.getNotifyByUserId(id);
  }
  @Get('/:id/booked')
  async getBookedByUserId(@Param('id') id: string): Promise<any> {
    return await this.UserService.getBookedByUserId(id);
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
  @Patch('/:id/wishlist')
  async patchWishlistByUserId(@Param('id') id: string, @Body() updateUserWishlist: string[]) {
    return await this.UserService.patchWishlistByUserId(id, updateUserWishlist);
  }
  @Patch('/:id/addwishlist/:valuetoadd')
  async addWishlistByUserId_G(@Param('id') id: string, @Param('valuetoadd') valuetoadd: string) {
    return await this.UserService.addWishlistByUserId(id, valuetoadd);
  }
  @Patch('/:id/addwishlist')
  async addWishlistByUserId_P(@Param('id') id: string, @Body('valuetoadd') valuetoadd: string) {
    return await this.UserService.addWishlistByUserId(id, valuetoadd);
  }
  @Patch('/:id/removewishlist/:valuetoremove')
  async removeWishlistByUserId_G(@Param('id') id: string, @Param('valuetoremove') valuetoremove: string) {
    return await this.UserService.removeWishlistByUserId(id, valuetoremove);
  }
  @Patch('/:id/removewishlist')
  async removeWishlistByUserId_P(@Param('id') id: string, @Body('valuetoremove') valuetoremove: string) {
    return await this.UserService.removeWishlistByUserId(id, valuetoremove);
  }
  @Patch('/:id/emptywishlist')
  async emptyWishlistByUserId(@Param('id') id: string) {
    return await this.UserService.emptyWishlistByUserId(id);
  }
  @Patch('/:id/notify')
  async patchNotifyByUserId(@Param('id') id: string, @Body() updateUserNotify: string[]) {
    return await this.UserService.patchNotifyByUserId(id, updateUserNotify);
  }
  @Patch('/:id/addnotify/:valuetoadd')
  async addNotifyByUserId_G(@Param('id') id: string, @Param('valuetoadd') valuetoadd: string) {
    return await this.UserService.addNotifyByUserId(id, valuetoadd);
  }
  @Patch('/:id/addnotify')
  async addNotifyByUserId_P(@Param('id') id: string, @Body('valuetoadd') valuetoadd: string) {
    return await this.UserService.addNotifyByUserId(id, valuetoadd);
  }
  @Patch('/:id/removenotify/:valuetoremove')
  async removeNotifyByUserId_G(@Param('id') id: string, @Param('valuetoremove') valuetoremove: string) {
    return await this.UserService.removeNotifyByUserId(id, valuetoremove);
  }
  @Patch('/:id/removenotify')
  async removeNotifyByUserId_P(@Param('id') id: string, @Body('valuetoremove') valuetoremove: string) {
    return await this.UserService.removeNotifyByUserId(id, valuetoremove);
  }
  @Patch('/:id/emptynotify')
  async emptyNotifyByUserId(@Param('id') id: string) {
    return await this.UserService.emptyNotifyByUserId(id);
  }
  @Patch('/:id/booked')
  async patchBookedByUserId(@Param('id') id: string, @Body() updateUserBooked: string[]) {
    return await this.UserService.patchBookedByUserId(id, updateUserBooked);
  }
  @Patch('/:id/addbooked/:valuetoadd')
  async addBookedByUserId_G(@Param('id') id: string, @Param('valuetoadd') valuetoadd: string) {
    return await this.UserService.addBookedByUserId(id, valuetoadd);
  }
  @Patch('/:id/addbooked')
  async addBookedByUserId_P(@Param('id') id: string, @Body('valuetoadd') valuetoadd: string) {
    return await this.UserService.addBookedByUserId(id, valuetoadd);
  }
  @Patch('/:id/removebooked/:valuetoremove')
  async removeBookedByUserId_G(@Param('id') id: string, @Param('valuetoremove') valuetoremove: string) {
    return await this.UserService.removeBookedByUserId(id, valuetoremove);
  }
  @Patch('/:id/removebooked')
  async removeBookedByUserId_P(@Param('id') id: string, @Body('valuetoremove') valuetoremove: string) {
    return await this.UserService.removeBookedByUserId(id, valuetoremove);
  }
  @Patch('/:id/emptybooked')
  async emptyBookedByUserId(@Param('id') id: string) {
    return await this.UserService.emptyBookedByUserId(id);
  }

  //DELETE route
  @Delete(':id')
  async deleteUser(@Param('id') id: string): Promise<User> {
    return await this.UserService.deleteUser(id);
  }
}
