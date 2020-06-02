import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable()
export class RouteGuard implements CanActivate{

    isAuth: boolean;

    constructor(private authService: AuthService, private router: Router){}
    
    canActivate(route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot): boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
        this.authService.authStatus();

        if(!this.authService.authStatus()){
            this.router.navigate(['/register']);
        }
        return this.authService.authStatus();
    }

    
}   