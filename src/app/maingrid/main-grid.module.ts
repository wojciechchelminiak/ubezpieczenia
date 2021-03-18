import {NgModule} from '@angular/core';

import {MainGridComponent} from './main-grid.component';
import {CommonModule} from '@angular/common';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
  declarations: [
    MainGridComponent,
  ],
    imports: [
        CommonModule,
        MatGridListModule,
        MatTabsModule
    ],
  exports: [
    MainGridComponent
  ],
  providers: [],
})
export class MainGridModule { }
