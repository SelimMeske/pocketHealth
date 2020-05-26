import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './frontend/auth/login/login.component';
import { HomeComponent } from './frontend/home/home.component';
import { RegisterComponent } from './frontend/auth/register/register.component';
import { MainCalculationsComponent } from './frontend/calculation/main-calculations/main-calculations.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'bmr', component: MainCalculationsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'tdee', component: MainCalculationsComponent},
  {path: 'caloricNeeds', component: MainCalculationsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
