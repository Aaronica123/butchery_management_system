import { Injectable,CanActivate,ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Request } from 'express';
import { DbServiceTs } from '../../db.service.ts/db.service.ts.js';
@Injectable()
export class AuthGuardTs implements CanActivate {
    
    constructor(private readonly client:DbServiceTs){}
    async canActivate(context: ExecutionContext):Promise<boolean>{
       const request= context.switchToHttp().getRequest<Request>()
       const value=request.headers?.authorization
       if(!value){
        throw new UnauthorizedException("Invalid or null token")
       }
       
       
       return true;
    }
}
