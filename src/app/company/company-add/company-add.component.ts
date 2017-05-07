import { CompanyService } from './../company.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'bfd-company-add',
  templateUrl: './company-add.component.html',
  styleUrls: ['./company-add.component.css']
})
export class CompanyAddComponent implements OnInit {

  private companyForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
              private location: Location,
              private companyService:CompanyService
  ) { }

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    this.companyForm = this.formBuilder.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required]
    })
  }

  private CancelButton() {
    this.location.back();
  }

  private SaveButton() {
    console.log(this.companyForm.value);
    this.companyService.addCompany(this.companyForm.value).subscribe(
      ()=>{
        this.location.back();
      }
    )
  }

}
