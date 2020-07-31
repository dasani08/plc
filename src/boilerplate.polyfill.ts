import 'source-map-support/register';

import * as _ from 'lodash';

import { BaseDto } from './common/dto/abstract.dto';
import { Document } from 'mongoose';

declare global {
  // eslint-disable-next-line @typescript-eslint/naming-convention,@typescript-eslint/tslint/config
  interface Array<T> {
    toDtos<B extends BaseDto>(this: T[]): B[];
  }
}

Array.prototype.toDtos = function <B extends BaseDto>(options?: any): B[] {
  // tslint:disable-next-line:no-invalid-this
  return <B[]>_(this)
    .map((item) => item.toDto(item, options))
    .compact()
    .value();
};
