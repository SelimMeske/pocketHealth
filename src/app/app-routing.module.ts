import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './frontend/home/home.component';
import { MainCalculationsComponent } from './frontend/calculation/main-calculations/main-calculations.component';
import { BodyTypeComponent } from './frontend/calculation/body-type/body-type.component';
import { SuppStackComponent } from './frontend/calculation/supp-stack/supp-stack.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'bmr', component: MainCalculationsComponent},
  {path: 'tdee', component: MainCalculationsComponent},
  {path: 'caloric-needs', component: MainCalculationsComponent},
  {path: 'ideal-weight', component: MainCalculationsComponent},
  {path: 'body-type', component: BodyTypeComponent},
  {path: 'supplement-stack', component: SuppStackComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
