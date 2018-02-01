import { AlertComponent } from './../service/alert/alert.component';
import { RegisterComponent } from './../pages/register/register.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './../pages/login/login.component';
import { AppRouterModule } from './app-router/app-router.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AlertService } from '../service/alert/alert.service';
import { APIService } from '../service/api.service';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    RouterModule,
    FormsModule,
    HttpModule,
  ],
  providers: [
    AlertService,
    APIService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
