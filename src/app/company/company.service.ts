import { Company } from './../model/Company';
import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class CompanyService {
  API_BASE = 'http://firebootcamp-crm-api.azurewebsites.net/api/';
  // companies = [
  //   {
  //     id: 1,
  //     name: 'Colliers Internetional',
  //     city: 'Sydney',
  //     email: 'wilkins.liang@colliers.com'
  //   },
  //   {
  //     id: 2,
  //     name: '2e System',
  //     city: 'Melbourne',
  //     email: 'wilkins.liang@2e.com'
  //   },
  //   {
  //     id: 3,
  //     name: 'IBM Australia',
  //     city: 'Sydney',
  //     email: 'wilkins.liang@ibm.com'
  //   },
  //   {
  //     id: 4,
  //     name: 'Astrazeneca',
  //     city: 'Sydney',
  //     email: 'wilkins.liang@az.com'
  //   }
  // ];
  constructor(private http:Http) { }

  getCompanies(){
    return this.http.get(this.API_BASE+'/company').map(this.extractData).catch(this.errorHandler);
  }

  getCompany(companyId:number){
    return this.http.get(`${this.API_BASE}/company/${companyId}`).map(this.extractData).catch(this.errorHandler);
  }

  deleteComapny(companyId:number){
    return this.http.delete(`${this.API_BASE}/company/${companyId}`).map(this.extractData).catch(this.errorHandler);
  }

  private saveCompany(company:Company){
    // return this.http.put(`${this.API_BASE}/company/${companyId}`, String)s
  }

  private extractData(response:Response){
    let body = response.json();
    return body || {};
  }

  private errorHandler(error:any){
    console.error(error);
    return Observable.throw(error);
  }
}
