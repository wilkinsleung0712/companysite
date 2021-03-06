import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotoRoutingModule } from './photo-routing.module';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { PhotoComponent } from './photo.component';
import { HttpModule } from '@angular/http';
import { PhotoTableComponent } from './photo-table/photo-table.component';
import { RouterModule } from '@angular/router';
import { PhotoDetailComponent } from './photo-detail/photo-detail.component';

@NgModule({
  imports: [
    CommonModule,
    PhotoRoutingModule,
    HttpModule,
    RouterModule
  ],
  declarations: [PhotoComponent, PhotoListComponent, PhotoTableComponent, PhotoDetailComponent]
})
export class PhotoModule { }
