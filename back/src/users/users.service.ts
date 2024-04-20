import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './users.model';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  //POST method
  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const newUser = new this.userModel(createUserDto);
    await newUser.save();
    return newUser;
  }

  //GET methods
  async getUsers(): Promise<User[]> {
    return await this.userModel.find().exec();
  }
  async getUserById(id: string): Promise<User> {
    return await this.userModel.findById(id).exec();
  }
  async getUserByEmail(email: string): Promise<User> {
    return await this.userModel.findOne({ email }).exec();
  }
  async getWishlistByUserId(id: string): Promise<any> {
    let user = await this.userModel.findById(id).exec();
    return user.wishlist;
  }
  async getNotifyByUserId(id: string): Promise<any> {
    let user = await this.userModel.findById(id).exec();
    return user.notify;
  }
  async getBookedByUserId(id: string): Promise<any> {
    let user = await this.userModel.findById(id).exec();
    return user.booked;
  }

  //UPDATE methods
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
  async patchWishlistByUserId(id: string, updateUserWishlist: string[]): Promise<User> {
    return await this.userModel.findByIdAndUpdate(id, updateUserWishlist, { new: true });
  }
  async addWishlistByUserId(id: string, valuetoadd: string): Promise<User> {
    let user = await this.userModel.findById(id).exec();
    let arr = JSON.parse(user.wishlist);
    arr.push(valuetoadd);
    arr = JSON.stringify(arr);
    return await this.userModel.findByIdAndUpdate(id, { wishlist: arr }, { new: true });
  }
  async removeWishlistByUserId(id: string, valuetoremove: string): Promise<User> {
    let user = await this.userModel.findById(id).exec();
    let arr = JSON.parse(user.wishlist);
    let index = arr.indexOf(valuetoremove);
    arr.splice(index, 1);
    arr = JSON.stringify(arr);
    return await this.userModel.findByIdAndUpdate(id, { wishlist: arr }, { new: true });
  }
  async emptyWishlistByUserId(id: string): Promise<User> {
    return await this.userModel.findByIdAndUpdate(id, {wishlist: '[]'}, { new: true });
  }
  async patchNotifyByUserId(id: string, updateUserNotify: string[]): Promise<User> {
    return await this.userModel.findByIdAndUpdate(id, updateUserNotify, { new: true });
  }
  async addNotifyByUserId(id: string, valuetoadd: string): Promise<User> {
    let user = await this.userModel.findById(id).exec();
    let arr = JSON.parse(user.notify);
    arr.push(valuetoadd);
    arr = JSON.stringify(arr);
    return await this.userModel.findByIdAndUpdate(id, { notify: arr }, { new: true });
  }
  async removeNotifyByUserId(id: string, valuetoremove: string): Promise<User> {
    let user = await this.userModel.findById(id).exec();
    let arr = JSON.parse(user.notify);
    let index = arr.indexOf(valuetoremove);
    arr.splice(index, 1);
    arr = JSON.stringify(arr);
    return await this.userModel.findByIdAndUpdate(id, { notify: arr }, { new: true });
  }
  async emptyNotifyByUserId(id: string): Promise<User> {
    return await this.userModel.findByIdAndUpdate(id, {notify: '[]'}, { new: true });
  }
  async patchBookedByUserId(id: string, updateUserBooked: string[]): Promise<User> {
    return await this.userModel.findByIdAndUpdate(id, updateUserBooked, { new: true });
  }
  async addBookedByUserId(id: string, valuetoadd: string): Promise<User> {
    let user = await this.userModel.findById(id).exec();
    let arr = JSON.parse(user.booked);
    arr.push(valuetoadd);
    arr = JSON.stringify(arr);
    return await this.userModel.findByIdAndUpdate(id, { booked: arr }, { new: true });
  }
  async removeBookedByUserId(id: string, valuetoremove: string): Promise<User> {
    let user = await this.userModel.findById(id).exec();
    let arr = JSON.parse(user.booked);
    let index = arr.indexOf(valuetoremove);
    arr.splice(index, 1);
    arr = JSON.stringify(arr);
    return await this.userModel.findByIdAndUpdate(id, { booked: arr }, { new: true });
  }
  async emptyBookedByUserId(id: string): Promise<User> {
    return await this.userModel.findByIdAndUpdate(id, { booked: '[]' }, { new: true });
  }

  //DELETE method
  async deleteUser(id: string): Promise<User> {
    return await this.userModel.findByIdAndDelete(id).exec();
  }
}
