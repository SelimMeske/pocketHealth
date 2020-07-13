import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './frontend/home/home.component';
import { MainCalculationsComponent } from './frontend/calculation/main-calculations/main-calculations.component';
import { BodyTypeComponent } from './frontend/calculation/body-type/body-type.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'bmr', component: MainCalculationsComponent},
  {path: 'tdee', component: MainCalculationsComponent},
  {path: 'caloricNeeds', component: MainCalculationsComponent},
  {path: 'idealWeight', component: MainCalculationsComponent},
  {path: 'bodyType', component: BodyTypeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
