import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardCComponent } from './dashboard-c/dashboard-c.component';

const routes: Routes = [
  {path:'' ,component:DashboardCComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
