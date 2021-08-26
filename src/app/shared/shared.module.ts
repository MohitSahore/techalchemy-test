
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';


// Directives
import { AmountDirective } from './directives/amount.directive';
import { NumberOnlyDirective } from './directives/number-only.directive';
import { GoogleplaceDirective } from './directives/googleplace.directive';

import { MatMenuModule } from '@angular/material/menu';

const directives = [
  NumberOnlyDirective,
  AmountDirective,
  GoogleplaceDirective
];

const matModule = [
  MatMenuModule
];

const imports = [
  FormsModule,
  ReactiveFormsModule,
  HttpClientModule
];

@NgModule({
  declarations: [
    ...directives
  ],
  imports: [
    CommonModule,
    ...imports,
    ...matModule
  ],
  exports: [
    ...directives,
    ...imports,
    ...matModule
  ],
  entryComponents: [],
  providers: []
})
export class SharedModule { }
