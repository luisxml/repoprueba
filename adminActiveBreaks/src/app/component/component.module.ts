import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';

import { GraphicsBarComponent } from './graphics-bar/graphics-bar.component';


@NgModule({
  declarations: [
    GraphicsBarComponent
  ],
  imports: [
    ChartsModule
  ],
  exports: [
    GraphicsBarComponent
  ]
})
export class ComponentModule { }
