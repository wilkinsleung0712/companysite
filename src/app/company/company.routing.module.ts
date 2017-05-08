import { Routes, RouterModule } from '@angular/router';
import { CompanyEditComponent } from './company-edit/company-edit.component';
import { CompanyAddComponent } from './company-add/company-add.component';
import { NgModule } from '@angular/core';
import { CompanyListComponent } from './company-list/company-list.component';
import { CompanyComponent } from './company.component';
const routes: Routes = [
  {
    path: '',
    component: CompanyComponent,
    children: [
      {
        path: '', component: CompanyListComponent
      },
      {
        path: 'company/edit/:id', component: CompanyEditComponent
      },
      {
        path: 'company/add/new', component: CompanyAddComponent
      }]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class CompanyRoutingModule {

}