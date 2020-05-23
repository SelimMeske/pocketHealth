import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './frontend/auth/login/login.component';
import { HomeComponent } from './frontend/home/home.component';
import { BmrComponent } from './frontend/calculation/bmr/bmr.component';
import { RegisterComponent } from './frontend/auth/register/register.component';
import { TdeeComponent } from './frontend/calculation/tdee/tdee.component';
import { CaloricNeedsComponent } from './frontend/calculation/caloric-needs/caloric-needs.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'bmr', component: BmrComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'tdee', component: TdeeComponent},
  {path: 'caloricNeeds', component: CaloricNeedsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
