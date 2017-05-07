import { Company } from './../model/Company';
import { Injectable } from '@angular/core';
import { Http, Response, Headers } from "@angular/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class CompanyService {
  API_BASE = 'http://firebootcamp-crm-api.azurewebsites.net/api/';
  private headers = new Headers({ 'Content-Type': 'application/json' });
  constructor(private http: Http) { }

  getCompanies() {
    return this.http.get(this.API_BASE + '/company').map(this.extractData).catch(this.errorHandler);
  }

  getCompany(companyId: number) {
    return this.http.get(`${this.API_BASE}/company/${companyId}`).map(this.extractData).catch(this.errorHandler);
  }

  deleteComapny(companyId: number) {
    return this.http.delete(`${this.API_BASE}/company/${companyId}`).map(this.extractData).catch(this.errorHandler);
  }

  saveCompany(company: Company) {
    return this.http.put(`${this.API_BASE}/company`, JSON.stringify(company), { headers: this.headers }).map(this.extractData).catch(this.errorHandler);
  }

  addCompany(company: Company) {
    return this.http.post(`${this.API_BASE}/company`, JSON.stringify(company), { headers: this.headers }).map(this.extractData).catch(this.errorHandler);
  }

  private extractData(response: Response) {
    let body = response.json();
    return body || {};
  }

  private errorHandler(error: any) {
    console.error(error);
    return Observable.throw(error);
  }
}
