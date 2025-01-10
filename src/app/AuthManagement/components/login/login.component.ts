import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service'; // Servicio para manejar autenticación.
import { Router, RouterModule } from '@angular/router'; // Para manejar navegación entre rutas.
import { FormsModule } from '@angular/forms'; // Para manejar formularios.
import { CommonModule } from '@angular/common'; // Para directivas comunes.

@Component({
  selector: 'app-login', // Selector del componente.
  templateUrl: './login.component.html', // Ruta del archivo HTML del componente.
  imports: [FormsModule, CommonModule, RouterModule], // Módulos importados.
  styleUrls: ['./login.component.css'], // Archivo de estilos del componente.
  standalone: true, // Componente independiente.
})
export class LoginComponent {
  /**
   * Email ingresado por el usuario.
   * @type {string}
   */
  Email = '';

  /**
   * Contraseña ingresada por el usuario.
   * @type {string}
   */
  Password = '';

  /**
   * Mensaje de error para credenciales inválidas.
   * @type {string | null}
   */
  errorMessage: string | null = null;

  /**
   * Constructor que inyecta el servicio de autenticación y el router.
   * @param authService Servicio de autenticación para manejar el login.
   * @param router Router para la navegación entre páginas.
   */
  constructor(private authService: AuthService, private router: Router) {}

  /**
   * Método para manejar el inicio de sesión.
   */
  login(): void {
    // Validar que el email tenga un formato correcto.
    if (!this.Email || !this.Email.includes('@')) {
      this.errorMessage = 'Por favor, ingrese un email válido.';
      return;
    }

    // Validar que la contraseña tenga entre 8 y 20 caracteres.
    if (!this.Password || this.Password.length < 6) {
      this.errorMessage = 'La contraseña debe tener entre 6 caracteres.';
      return;
    }

    // Crear el objeto de datos en formato JSON.
    const loginData = {
      Email: this.Email,
      Password: this.Password,
    };

    // Llamar al servicio de autenticación.
    this.authService.login(loginData).subscribe({
      next: (response) => {
        console.log('Inicio de sesión exitoso:', response);

        // Almacenar el token en localStorage.
        localStorage.setItem('token', response.Token);

        // Redirigir al usuario a la página de inicio.
        this.router.navigate(['/post']);
      },
      error: (err) => {
        console.error('Error al iniciar sesión:', err);

        // Mostrar mensaje de error y limpiar solo el campo de contraseña.
        this.errorMessage = 'Credenciales inválidas';
        this.Password = ''; // Limpia el campo de contraseña
      },
    });
  }
}
