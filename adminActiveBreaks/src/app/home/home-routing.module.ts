import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { homeRoutes } from './home.routes';


const routes: Routes = [
    {
          path: '', component: HomeComponent,
          children: homeRoutes
      },
  ];


@NgModule({
    declarations: [],
    imports: [
      RouterModule.forChild(routes)
    ],
    exports: [
      RouterModule
    ]
  })
  export class HomeRoutingModule { }
