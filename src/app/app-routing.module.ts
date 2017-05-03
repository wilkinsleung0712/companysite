import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanyEditComponent } from './company/company-edit/company-edit.component';
import { CompanyListComponent } from './company/company-list/company-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo:'company-list',
    pathMatch:'full'
    // children: []
  },
  {
    path:'company-list',component:CompanyListComponent
  },
  {
    path:'company/edit/:id',component:CompanyEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
