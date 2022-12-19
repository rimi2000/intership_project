import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyprofileRoutingModule } from './myprofile-routing.module';
import { MyprofileComponent } from './myprofile/myprofile.component';


@NgModule({
  declarations: [
    MyprofileComponent
  ],
  exports:[MyprofileComponent],
  imports: [
    CommonModule,
    MyprofileRoutingModule
  ]
})
export class MyprofileModule { }
