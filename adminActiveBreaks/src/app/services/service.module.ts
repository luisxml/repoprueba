import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

// Services
import { ThemeSettingService, SidebarService, HttpInterceptorService } from './service.index';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    ThemeSettingService,
    SidebarService,
    HttpInterceptorService
  ]
})
export class ServiceModule { }
