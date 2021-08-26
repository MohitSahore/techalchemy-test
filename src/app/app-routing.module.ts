import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', redirectTo: '/restaurant', pathMatch: 'full'
  },
  {
    path: '', loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule)
  },
  {
    path: '**', redirectTo: '/restaurant'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }