import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import * as jwtDecode from 'jwt-decode';

import { AuthService } from '../modules/auth/auth.service';

@Injectable()
export class AuthUserInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();
    const authorization = request.headers['authorization'];
    const user = jwtDecode(authorization);
    AuthService.setAuthUser(user);

    return next.handle();
  }
}
