// imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout.routing';

// components
import { LayoutComponent } from './layout.component';
import { SideBarComponent } from './common/side-bar/side-bar.component';
import { HeaderComponent } from './common/header/header.component';

@NgModule({
  declarations: [
    LayoutComponent,
    SideBarComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule
  ],
  entryComponents: []
})
export class LayoutModule { }

