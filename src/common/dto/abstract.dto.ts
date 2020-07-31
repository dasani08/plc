import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';

export class BaseDto<T extends Document = Document> {
  @ApiProperty()
  id: string;

  constructor(document: T) {
    this.id = document._id.toString();
  }
}
