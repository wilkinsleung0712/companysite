import { CompanyService } from './../company.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bfd-company-edit',
  templateUrl: './company-edit.component.html',
  styleUrls: ['./company-edit.component.css']
})
export class CompanyEditComponent implements OnInit {

  companyId = this.activedRoute.snapshot.params['id'];
  company:any;
  constructor(private router: Router, private activedRoute: ActivatedRoute,private companyService:CompanyService) { }

  ngOnInit() {
    this.companyService.getCompany(this.companyId).subscribe(
      company => this.company = company
    );
  }

}
