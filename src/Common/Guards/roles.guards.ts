import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { JwtServiceClass } from './../Providers/jwt.service';
/**
 * This class is used to protect the Apis from the outer persons
 */
@Injectable()
export class RolesGuard implements CanActivate {
  constructor(
    private readonly reflecter: Reflector,
    private readonly jwtServiceClass: JwtServiceClass
  ) {}
  canActivate(
    context: ExecutionContext
  ): boolean | Promise<boolean> | Observable<boolean> {
    const roles = this.reflecter.get<string>('roles', context.getHandler());
    if (!roles) {
      return true;
    }
    if (!this.jwtServiceClass.verifyJwtToken(roles)) {
      return false;
    }
    return true;
  }
}
