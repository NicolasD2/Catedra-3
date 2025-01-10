import { Routes } from '@angular/router';
import { LoginComponent } from './AuthManagement/components/login/login.component';
import { RegisterComponent } from './AuthManagement/components/register/register.component';
import { authGuard } from './AuthManagement/guards/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login',component: LoginComponent }, // Página de registro
  // pa ver los post {path: 'clients',component: ClientmanagementComponent,canActivate: [authGuard],},
  {path: 'register',component: RegisterComponent},

];
