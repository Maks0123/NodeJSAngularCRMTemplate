import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AppRoutingModule} from './app-routing.module';
import { AuthLayoutComponent } from './shared/layouts/auth-layout/auth-layout.component';
import { SiteLayoutComponent } from './shared/layouts/site-layout/site-layout.component';
import { RegisterPageComponent } from './register-page/register-page.component'

import { AuthService } from './shared/services/auth.service'
import { AuthGuard } from './shared/classes/auth.guard'
import { TokenInterceptor } from './shared/classes/token.interceptor'

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    AuthLayoutComponent,
    SiteLayoutComponent,
    RegisterPageComponent

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [AuthService, AuthGuard, {
    provide: HTTP_INTERCEPTORS,
    multi: true,
    useClass: TokenInterceptor
  } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
