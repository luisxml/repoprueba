import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';


import { AppComponent } from './app.component';

// Modules
import { AppRoutingModule, APP_ROUTES } from './app-routing.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { ServiceModule } from './services/service.module';

// Services
import { HttpInterceptorService } from './services/service.index';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AuthenticationModule,
    AppRoutingModule,
    APP_ROUTES,
    ServiceModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
