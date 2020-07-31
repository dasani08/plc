import { Injectable } from '@nestjs/common';

import { ContextService } from '../../providers/context.service';

@Injectable()
export class AuthService {
  private static _authUserKey = 'user_key';

  static setAuthUser(user: any) {
    ContextService.set(AuthService._authUserKey, user);
  }

  static getAuthUser(): any {
    return ContextService.get(AuthService._authUserKey);
  }
}
