import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './frontend/auth/login/login.component';
import { RegisterComponent } from './frontend/auth/register/register.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { HomeComponent } from './frontend/home/home.component';
import { MatCardModule } from '@angular/material/card';
import { BmrComponent } from './frontend/calculation/bmr/bmr.component';
import { AuthInterceptor } from './services/auth.interceptor';
import { MatRadioModule } from '@angular/material/radio';
import { NavigationComponent } from './frontend/navigation/navigation.component';
import { MatIconModule } from '@angular/material/icon';
import { TdeeComponent } from './frontend/calculation/tdee/tdee.component';
import { MatSliderModule } from '@angular/material/slider';
import { CaloricNeedsComponent } from './frontend/calculation/caloric-needs/caloric-needs.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    BmrComponent,
    NavigationComponent,
    TdeeComponent,
    CaloricNeedsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule,
    MatCardModule,
    MatRadioModule,
    MatIconModule,
    MatSliderModule,
    MatCheckboxModule,
    MatSelectModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
