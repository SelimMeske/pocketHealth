import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './frontend/home/home.component';
import { MainCalculationsComponent } from './frontend/calculation/main-calculations/main-calculations.component';
import { SettingsComponent } from './frontend/settings/settings.component';
import { RouteGuard } from './services/route.guard';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'bmr', component: MainCalculationsComponent},
  {path: 'tdee', component: MainCalculationsComponent},
  {path: 'caloricNeeds', component: MainCalculationsComponent},
  {path: 'settings', component: SettingsComponent, canActivate: [RouteGuard]},
  {path: '', loadChildren: () => import('./frontend/auth/Auth.module').then(m => m.AuthModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [RouteGuard]
})
export class AppRoutingModule { }
