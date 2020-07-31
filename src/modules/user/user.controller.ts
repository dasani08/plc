import {
  Controller,
  Get,
  Post,
  Body,
  HttpStatus,
  UseInterceptors,
} from '@nestjs/common';
import { ApiResponse, ApiCreatedResponse } from '@nestjs/swagger';

import { UserDto } from './dto/UserDto';
import { UserRegisterDto } from './dto/UserRegisterDto';
import { UserService } from './user.service';
import { AuthUser } from 'decorators/auth-user.decorator';
import { AuthUserInterceptor } from 'interceptors/auth-user-interceptor.service';

@Controller('user')
@UseInterceptors(AuthUserInterceptor)
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Get users list',
    type: UserDto,
  })
  async findAll(@AuthUser() user): Promise<UserDto[]> {
    return this.userService.findAll();
  }

  @Post()
  @ApiCreatedResponse({
    description: 'Create new user',
    type: UserDto,
  })
  async create(@Body() createUserDto: UserRegisterDto) {
    return await this.userService.create(createUserDto);
  }
}
