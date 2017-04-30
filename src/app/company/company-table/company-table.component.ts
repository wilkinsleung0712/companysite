import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Company } from "app/company/Company";

@Component({
  selector: 'bfd-company-table',
  templateUrl: './company-table.component.html',
  styleUrls: ['./company-table.component.css']
})
export class CompanyTableComponent implements OnInit {
  
  // take an array from the caller who calling this directive
  @Input() companies:Company[];
  // output a event binding for caller who intercept with this event
  @Output() editCompanyEventNotification : EventEmitter<any> = new EventEmitter();
   @Output() deleteCompanyEventNotification : EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
}
