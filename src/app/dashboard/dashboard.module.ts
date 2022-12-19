import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardCComponent } from './dashboard-c/dashboard-c.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
@NgModule({
  declarations: [
    DashboardCComponent
  ],
  exports:[DashboardCComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatGridListModule,
    MatCardModule,
    MatIconModule,
    MatMenuModule


    
  ]
})
export class DashboardModule { }
