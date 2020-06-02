import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './frontend/home/home.component';
import { MainCalculationsComponent } from './frontend/calculation/main-calculations/main-calculations.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'bmr', component: MainCalculationsComponent},
  {path: 'tdee', component: MainCalculationsComponent},
  {path: 'caloricNeeds', component: MainCalculationsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
