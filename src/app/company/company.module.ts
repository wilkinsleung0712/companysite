import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CompanyEditComponent } from './company-edit/company-edit.component';
import { CompanyAddComponent } from './company-add/company-add.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { CompanyTableComponent } from './company-table/company-table.component';
import { CompanyRoutingModule } from './company.routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CompanyService } from './company.service';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { CompanyComponent } from './company.component';

// const routes: Routes = [
//   {
//     path: 'company/edit/:id', component: CompanyEditComponent
//   },
//   {
//     path: 'company/add/new', component: CompanyAddComponent
//   }
// ];

@NgModule({
  imports: [
    CommonModule,
    CompanyRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  declarations: [
    CompanyListComponent,
    CompanyTableComponent,
    CompanyEditComponent,
    CompanyAddComponent,
    CompanyComponent
  ],
  providers: [CompanyService]
})
export class CompanyModule { }
