import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import * as jwtDecode from 'jwt-decode';

// eslint-disable-next-line @typescript-eslint/naming-convention
export const AuthUser = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    return request.user;
  },
);
