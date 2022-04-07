import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { FormDynamicComponent } from './form/form-dynamic/form-dynamic.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from "./material/material.module";
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { EditComponent } from './edit/edit.component';
import { SubFormComponent } from './form/sub-form-dynamic/sub-form.component';

@NgModule({
  declarations: [
    AppComponent,
    FormDynamicComponent,
    HomeComponent,
    RegisterComponent,
    EditComponent,
    SubFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
