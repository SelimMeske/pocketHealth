import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './frontend/home/home.component';
import { MainCalculationsComponent } from './frontend/calculation/main-calculations/main-calculations.component';
import { BodyTypeComponent } from './frontend/calculation/body-type/body-type.component';
import { SuppStackComponent } from './frontend/calculation/supp-stack/supp-stack.component';


const routes: Routes = [
  {path: '', component: HomeComponent, data: {
    title: 'Fitness Calculator | InstaFitCalculator.com',
    description: 'Every fitness calculator that you need in one place.',
    ogUrl: 'instafitcalculator.com'
  }},
  {path: 'bmr', component: MainCalculationsComponent, data: {
    title: 'Calculate your basal metabolic rate | InstaFitCalculator.com',
    description: 'Calculate the basal metabolic rate with InstaFitCalculator.',
    ogUrl: 'instafitcalculator.com/bmr'
  }},
  {path: 'tdee', component: MainCalculationsComponent, data: {
    title: 'Calories Burned Calculator | InstaFitCalculator.com',
    description: 'You wonder how much calories do you burn? Find out now with InstaFitCalculator.',
    ogUrl: 'instafitcalculator.com/tdee'
  }},
  {path: 'caloric-needs', component: MainCalculationsComponent, data: {
    title: 'Caloric needs calculator | InstaFitCalculator.com',
    description: 'You wonder how much calories do you need each day? Find out now with InstaFitCalculator.',
    ogUrl: 'instafitcalculator.com/caloric-needs'
  }},
  {path: 'ideal-weight', component: MainCalculationsComponent, data: {
    title: 'Calculate your ideal weight | InstaFitCalculator.com',
    description: 'You wonder what is your ideal weight? Find out now with InstaFitCalculator.',
    ogUrl: 'instafitcalculator.com/ideal-weight'
  }},
  {path: 'body-type', component: BodyTypeComponent, data: {
    title: 'What is your body type? | InstaFitCalculator.com',
    description: 'You wonder what is your body type? Find out now with InstaFitCalculator.',
    ogUrl: 'instafitcalculator.com/body-type'
  }},
  {path: 'supplement-stack', component: SuppStackComponent, data: {
    title: 'What is my ideal supplement stack? | InstaFitCalculator.com',
    description: 'Find out what is your ideal supplement stack with InstaFitCalculator.',
    ogUrl: 'instafitcalculator.com/supplement-stack'
  }}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
