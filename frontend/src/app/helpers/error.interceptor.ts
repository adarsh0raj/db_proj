import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { AuthenticationService } from '../services/authentication.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthenticationService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
            if (err.status === 500) {
                // auto logout if 500 response returned from api
                console.log("this mf is happening", err);
                this.authenticationService.logout();
                location.reload();
            }
            
            const error = err.error.message || err.statusText;
            console.log("this2 mf is happening", err);
            return throwError(error);
        }))
    }
}