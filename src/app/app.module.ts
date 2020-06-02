import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'

import { HomeComponent } from './frontend/home/home.component';
import { FormsModule } from '@angular/forms';
import { AuthInterceptor } from './services/auth.interceptor';
import { NavigationComponent } from './frontend/navigation/navigation.component';
import { MainCalculationsComponent } from './frontend/calculation/main-calculations/main-calculations.component';
import { UserInfoComponent } from './frontend/user-info/user-info.component';
import { SettingsComponent } from './frontend/settings/settings.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ErrorInterceptor } from './services/error.interceptor';
import { AngularMaterialModule } from './angular-material.module';
import { CustomFooterComponent } from './frontend/custom-footer/custom-footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    MainCalculationsComponent,
    UserInfoComponent,
    SettingsComponent,
    CustomFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularMaterialModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
              {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
