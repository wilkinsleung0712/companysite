import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotoRoutingModule } from './photo-routing.module';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { PhotoComponent } from './photo.component';

@NgModule({
  imports: [
    CommonModule,
    PhotoRoutingModule
  ],
  declarations: [PhotoComponent, PhotoListComponent]
})
export class PhotoModule { }
