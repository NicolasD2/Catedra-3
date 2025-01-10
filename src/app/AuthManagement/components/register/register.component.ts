import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service'; // Servicio para manejar la autenticación.
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms'; // Módulo para manejar formularios.
import { CommonModule } from '@angular/common'; // Directivas y módulos comunes.
import { RouterModule } from '@angular/router'; // Para navegación.
import { Router } from '@angular/router';
@Component({
  selector: 'app-register', // Selector del componente.
  imports: [FormsModule, CommonModule, RouterModule,ReactiveFormsModule], // Módulos importados.
  templateUrl: './register.component.html', // Ruta del archivo HTML del componente.
  styleUrls: ['./register.component.css'], // Archivo de estilos CSS del componente.
  standalone: true, // Componente independiente.
})
export class RegisterComponent {
  /**
   * Objeto que almacena los datos del usuario para el registro.
   * @type {object}
   */
  registerForm: FormGroup;
  emailError : string | null = null;
  constructor(private authService: AuthService, private FormB: FormBuilder, private router: Router) {
    this.registerForm = this.FormB.group({Email: ['',[Validators.required, Validators.email]], Password:['',[Validators.required,Validators.minLength(6),Validators.pattern(/^(?=.*\d).+$/),],],});
  }

  /**
   * Maneja el proceso de registro del usuario.
   * Valida los campos ingresados y envía los datos al backend.
   */
  register(): void {
    // Validar que el campo ConfirmPassword no esté vacío.
    if (this.registerForm.invalid) {
      alert('Complete el formulario correctamente.');
      return;
    }

    // Validar que las contraseñas coincidan.
    this.authService.register(this.registerForm.value).subscribe({
      next:()=>{
        alert("Registro exitoso");
        this.router.navigate(['/login'])
      },
      error:(err)=>{
        console.error('Error al registrarse', err);
        alert('Email duplicado . Intente nuevamente')
        this.registerForm.get("Password")?.reset();
      },
    });
  }
}
