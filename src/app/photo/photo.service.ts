import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PhotoService {

  constructor(private http: Http) { }

  API_BASE = 'http://localhost:8080/api/photos';

  getPhotoList() {
    return this.http.get(this.API_BASE).map(this.extractData).catch(this.errorHandler);
  }

  getPhoto(photoId:number){
    return this.http.get(`${this.API_BASE}/`+photoId).map(this.extractData).catch(this.errorHandler);
  }
  
  private extractData(response: Response) {
    let body = response.json();
    return body.data || {};
  }

  private errorHandler(error: any) {
    console.error(error);
    return Observable.throw(error);
  }
}
