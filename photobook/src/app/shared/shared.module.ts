import { ReactiveFormsModule } from '@angular/forms';
import { MessageModule } from './../components/message/message.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [CommonModule, MessageModule, ReactiveFormsModule],
  exports: [MessageModule, ReactiveFormsModule],
})
export class SharedModule {}
