import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './mainpage/layout/layout.component';



const routes: Routes = [
  {path:'',component:LayoutComponent,
  children:[{
    path: '',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)},
    {
      path: 'admin',
      loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
    },
    {
      path: 'myprojects',
      loadChildren: () => import('./myprojects/myprojects.module').then(m => m.MyprojectsModule)
    },
    {
      path: 'myprofile',
      loadChildren: () => import('./myprofile/myprofile.module').then(m => m.MyprofileModule)
    },
    {
      path: 'events',
      loadChildren: () => import('./events/events.module').then(m => m.EventsModule)
    }
    
    
    
    ],
    
    }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
