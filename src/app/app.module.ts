import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http'

import { HomeComponent } from './frontend/home/home.component';
import { FormsModule } from '@angular/forms';
import { NavigationComponent } from './frontend/navigation/navigation.component';
import { MainCalculationsComponent } from './frontend/calculation/main-calculations/main-calculations.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from './angular-material.module';
import { CustomFooterComponent } from './frontend/custom-footer/custom-footer.component';
import { BodyTypeComponent } from './frontend/calculation/body-type/body-type.component';
import { SuppStackComponent } from './frontend/calculation/supp-stack/supp-stack.component';
import { BodyTypeTextComponent } from './frontend/calculation/body-type-text/body-type-text.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    MainCalculationsComponent,
    CustomFooterComponent,
    BodyTypeComponent,
    SuppStackComponent,
    BodyTypeTextComponent
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
  bootstrap: [AppComponent]
})
export class AppModule { }
