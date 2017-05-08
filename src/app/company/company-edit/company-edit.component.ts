import { CompanyService } from './../company.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'bfd-company-edit',
  templateUrl: './company-edit.component.html',
  styleUrls: ['./company-edit.component.css']
})
export class CompanyEditComponent implements OnInit {

  companyId = this.activedRoute.snapshot.params['id'];
  company: any;

  companyForm: FormGroup;
  constructor(private router: Router, 
              private activedRoute: ActivatedRoute, 
              private companyService: CompanyService, 
              private formBuilder: FormBuilder, 
              private location: Location) { }

  ngOnInit() {
    this.companyService.getCompany(this.companyId).subscribe(
      company => {
        this.company = company
        this.prepareFormValue();
      }
    );

    this.createForm();
  }

  private createForm() {
    this.companyForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      phone: ''
    });
  }


  private prepareFormValue() {
    this.companyForm.setValue({
      name: this.company.name || '',
      email: this.company.email || '',
      phone: this.company.phone || ''
    })
  }

  private Cancel(){
    this.location.back();
  }
  private Submit() {
    // this.companyService.
  }
}
