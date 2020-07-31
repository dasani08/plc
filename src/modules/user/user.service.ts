import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { User } from './schema/user.schema';
import { UserRegisterDto } from './dto/UserRegisterDto';
import { UserDto } from './dto/UserDto';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async create(userDto: UserRegisterDto): Promise<UserDto> {
    const createdUser = new this.userModel(userDto);
    await createdUser.save();
    return new UserDto(createdUser);
  }

  async findAll(): Promise<UserDto[]> {
    const users = await this.userModel.find().exec();
    return users.toDtos<UserDto>();
  }
}
