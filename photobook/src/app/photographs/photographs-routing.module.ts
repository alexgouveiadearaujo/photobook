import { PhotoListResolver } from './photo-list/photo-list.resolver';
import { PhotoDetailsComponent } from './photo-details/photo-details.component';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: PhotoListComponent,
    resolve: {
      photos: PhotoListResolver,
    },
  },
  {
    path: ':photoId',
    component: PhotoDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PhotographsRoutingModule {}
