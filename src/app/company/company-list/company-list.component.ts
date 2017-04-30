import { Component, OnInit } from '@angular/core';
import { Company } from '../Company';

@Component({
  selector: 'bfd-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {

  companies: Company[];
  constructor() { }

  ngOnInit() {
    this.companies = [
      {
        id: 1,
        name: 'Colliers Internetional',
        city:'Sydney',
        email:'wilkins.liang@colliers.com'
      },
      {
        id: 2,
        name: '2e System',
        city:'Melbourne',
        email:'wilkins.liang@2e.com'
      },
      {
        id: 3,
        name: 'IBM Australia',
        city:'Sydney',
        email:'wilkins.liang@ibm.com'
      },
      {
        id: 4,
        name: 'Astrazeneca',
        city:'Sydney',
        email:'wilkins.liang@az.com'
      }
    ];
  }

  editCompany(companyId){
    console.log('edit -> '+companyId);
  }

  deleteCompany(companyId){
    console.log('delete -> '+companyId);
  }
}
