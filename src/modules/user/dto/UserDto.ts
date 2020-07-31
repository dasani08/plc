import { ApiProperty } from '@nestjs/swagger';
import { BaseDto } from 'common/dto/abstract.dto';
import { User } from '../schema/user.schema';

export class UserDto extends BaseDto<User> {
  @ApiProperty()
  firstName: string;
  @ApiProperty()
  lastName: string;
  @ApiProperty()
  username: string;
  @ApiProperty()
  email: string;
  @ApiProperty()
  avatar: string;
  @ApiProperty()
  phone: string;

  constructor(user: User) {
    super(user);
    this.firstName = user.firstName;
    this.lastName = user.lastName;
    this.username = user.username;
    this.email = user.email;
    this.avatar = user.avatar;
    this.phone = user.phone;
  }
}
