import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhotoComponent } from './photo.component';
import { PhotoListComponent } from './photo-list/photo-list.component';

const routes: Routes = [
  {
    path:'',
    component:PhotoComponent,
    children:[
      {
        path:'',component:PhotoListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhotoRoutingModule { }
