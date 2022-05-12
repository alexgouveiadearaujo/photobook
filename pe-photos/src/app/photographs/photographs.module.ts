import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotographsRoutingModule } from './photographs-routing.module';
import { PhotoListComponent } from './photo-list/photo-list.component';


@NgModule({
  declarations: [PhotoListComponent],
  imports: [
    CommonModule,
    PhotographsRoutingModule
  ]
})
export class PhotographsModule { }
