import { CompanyService } from './../company.service';
import { Component, OnInit } from '@angular/core';
import { Company } from '../../model/Company';
import { Router } from '@angular/router';

@Component({
  selector: 'bfd-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {

  companies: any;
  constructor(private router: Router, private companyService: CompanyService) { }

  ngOnInit() {
    this.getCompanies();
  }

  editCompany(companyId) {
    console.log('edit -> ' + companyId);
    this.router.navigate(['/company/edit', companyId]);
  }

  deleteCompany(companyId) {
    console.log('delete -> ' + companyId);
    this.companyService.deleteComapny(companyId).subscribe(
      () => this.getCompanies()
    );
  }

  private getCompanies() {
    this.companyService.getCompanies().subscribe(
      companies => this.companies = companies
    );
  }
}
