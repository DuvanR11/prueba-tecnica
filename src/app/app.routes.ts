import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {
    path: 'home',
    component: MainComponent,
    loadChildren: () => import('./views/views.module').then(m => m.ViewsModule)
  },
  { 
    path: '', 
    redirectTo: 'home', 
    pathMatch: 'full' 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
