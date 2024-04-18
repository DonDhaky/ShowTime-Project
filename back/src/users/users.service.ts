import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './users.model';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    /*
  const title = concertTitle;
  const genre = concertGenre;
  const group = concertGroup;
  const date = concertDate;
  const price = concertPrice;
  const number_of_bookings = concertBooking;
  */

  const newUser = new this.userModel(
    createUserDto
    /*{
    title,
    genre,
    group,
    date,
    price,
    number_of_bookings,
  }*/
  );
  await newUser.save();
  return newUser;
}
  /*
  async createtUser(userAdmin: string, userName: string, userEmail: string, userPassword: string, userFav: string, userWish: string, userBooked: string): Promise<User> {
    const is_admin = userAdmin;
    const username = userName;
    const email = userEmail;
    const hashedPassword = await bcrypt.hash(userPassword, 10);
    const favorite_groups = userFav;
    const wishlist = userWish;
    const booked = userBooked;

    const newUser = new this.userModel({
        is_admin,
        username,
        email,
        password: hashedPassword,
        favorite_groups,
        wishlist,
        booked,
    });
    await newUser.save();
    return newUser;
  }
*/

  async getUsers(): Promise<User[]> {
    return await this.userModel.find().exec();
  }
  async getUserById(id: string): Promise<User> {
    return await this.userModel.findById(id).exec();
  }
  async getUserByEmail(email: string): Promise<User> {
    return await this.userModel.findOne({ email }).exec();
  }

  async updateUser(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    if (updateUserDto.password) {
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(updateUserDto.password, salt);
        updateUserDto.password = hashedPassword;
      }
    return this.userModel.findByIdAndUpdate(id, updateUserDto, { new: true });
  }
  async patchUser(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    if (updateUserDto.password) {
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(updateUserDto.password, salt);
        updateUserDto.password = hashedPassword;
      }
    return await this.userModel.findByIdAndUpdate(id, updateUserDto, { new: true });
  }

  async deleteUser(id: string): Promise<User> {
    return await this.userModel.findByIdAndDelete(id).exec();
  }
}
