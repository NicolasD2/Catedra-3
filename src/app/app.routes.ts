import { Routes } from '@angular/router';
import { LoginComponent } from './AuthManagement/components/login/login.component';
import { RegisterComponent } from './AuthManagement/components/register/register.component';
import { authGuard } from './AuthManagement/guards/auth.guard';
import { ListPostComponent } from './Post/component/listpost/listpost.component';
import { CreatepostComponent } from './Post/component/createpost/createpost.component';
import { HomeComponent } from './Post/component/home/home.component';

export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: 'home', component: HomeComponent},
  {path: 'login',component: LoginComponent }, // Página de registro
  {path: 'listposts',component: ListPostComponent,canActivate: [authGuard],},
  {path: 'register',component: RegisterComponent},
  {path:'posts/create', component: CreatepostComponent}
];

