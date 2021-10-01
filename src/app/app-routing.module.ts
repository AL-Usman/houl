import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanActiveService } from './can-active.service';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full', canActivate: [CanActiveService]},
  { path: 'home', component: HomeComponent, canActivate: [CanActiveService]},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent } ,
  { path: 'profile', component: ProfileComponent , canActivate: [CanActiveService]},
  {path: 'cart', component: CartComponent , canActivate: [CanActiveService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
