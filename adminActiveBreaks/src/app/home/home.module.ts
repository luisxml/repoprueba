import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// Modules
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ComponentModule } from '../component/component.module';

// Home Pages
import { HomeComponent } from './home.component';
import { HomePageComponent } from './home-page/home-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ThemeSettingComponent } from './theme-setting/theme-setting.component';
import { PageBlankComponent } from './page-blank/page-blank.component';


@NgModule({
  declarations: [
    HomeComponent,
    HomePageComponent,
    DashboardComponent,
    ThemeSettingComponent,
    PageBlankComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    HomeRoutingModule,
    SharedModule,
    ComponentModule
  ],
  exports: [
    ComponentModule
  ]
})
export class HomeModule { }
