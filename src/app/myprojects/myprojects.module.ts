import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatGridListModule} from '@angular/material/grid-list';

import { MyprojectsRoutingModule } from './myprojects-routing.module';
import { MyprojectsComponent } from './myprojects/myprojects.component';


@NgModule({
  declarations: [
    MyprojectsComponent
  ],
  exports:[MyprojectsComponent],
  imports: [
    CommonModule,
    MyprojectsRoutingModule,
    MatGridListModule
  ]
})
export class MyprojectsModule { }
