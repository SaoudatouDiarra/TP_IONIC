import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  private apiUrl = 'http://localhost:8080/apprenant';
  private recup: any[] = [];

  constructor(private http: HttpClient) { }

  public getListe(){
    this.http.get(this.apiUrl+'/ListeApprenants').subscribe(
      data => this.recup.push(data),
    );
    return this.recup;
  }

  public getApiUrl(){
    return this.apiUrl;
  }
}
