import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Request intercepted:', req.url);
    // Puedes clonar la solicitud para añadir encabezados, modificar el cuerpo, etc.
    const clonedRequest = req.clone({
      setHeaders: {
        Authorization: `Bearer YOUR_TOKEN`
      }
    });
    return next.handle(clonedRequest);
  }
}
