import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantsComponent } from './restaurants.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';

import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: RestaurantsComponent
  },
  {
    path: ':id', component: RestaurantDetailComponent
  }
];

@NgModule({
  declarations: [RestaurantsComponent, RestaurantDetailComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class RestaurantsModule { }
