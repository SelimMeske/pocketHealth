import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor{
    
    constructor(private authService: AuthService){ }

    intercept(req: HttpRequest<any>, next: HttpHandler){
        let token = 'Bearer ' + this.authService.getToken();
        let request = req.clone({headers: req.headers.set('authorization', token)});
       
        return next.handle(request);
    }
}