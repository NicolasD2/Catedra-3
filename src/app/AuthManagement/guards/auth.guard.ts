import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

/**
 * Guardia de ruta para verificar si el usuario tiene un token.
 *
 * Este guardia verifica si hay un token almacenado en el navegador.
 * Si no hay token, redirige al usuario a la página de inicio de sesión (`/login`).
 *
 * @returns `true` si el usuario tiene un token, de lo contrario redirige a `/login`.
 */
export const authGuard: CanActivateFn = (route, state) => {
  // Inyectar el servicio de enrutamiento para redirección
  const router = inject(Router);

  // Recuperar el token almacenado en el navegador
  const token = localStorage.getItem('token');

  if (token) {
    // Si hay un token, permitir el acceso
    return true;
  } else {
    // Si no hay token, redirigir a la página de inicio de sesión
    alert('Debe iniciar sesion');
    router.navigate(['/login']);
    return false;
  }
};
