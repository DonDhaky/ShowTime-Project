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
    return await this.userModel.findByIdAndUpdate(id, updateUserDto, {
      new: true,
    });
  }

  //DELETE method
  async deleteUser(id: string): Promise<User> {
    return await this.userModel.findByIdAndDelete(id).exec();
  }
}
