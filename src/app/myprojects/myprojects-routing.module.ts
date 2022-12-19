import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyprojectsComponent } from './myprojects/myprojects.component';

const routes: Routes = [
{
path:'',component:MyprojectsComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyprojectsRoutingModule { }
