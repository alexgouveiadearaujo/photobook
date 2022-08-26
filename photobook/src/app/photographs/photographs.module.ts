import { SharedModule } from './../shared/shared.module';
import { CardModule } from './../components/card/card.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotographsRoutingModule } from './photographs-routing.module';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { PhotoComponent } from './photo/photo.component';
import { GridPhotosComponent } from './grid-photos/grid-photos.component';
import { PhotoDetailsComponent } from './photo-details/photo-details.component';
import { CommentsComponent } from './photo-details/comments/comments.component';
import { MessageModule } from '../components/message/message.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NewPhotoComponent } from './new-photo/new-photo.component';

@NgModule({
  declarations: [
    PhotoListComponent,
    PhotoComponent,
    GridPhotosComponent,
    PhotoDetailsComponent,
    CommentsComponent,
    NewPhotoComponent,
  ],
  imports: [CommonModule, PhotographsRoutingModule, CardModule, SharedModule],
})
export class PhotographsModule {}
