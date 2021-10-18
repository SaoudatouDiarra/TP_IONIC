import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServicesService } from '../service/services.service';
import { Route, Router} from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  private apiUrl;
  private heure;

  constructor(
    private http: HttpClient,
    private service: ServicesService,
    private route: Router
    ) {
      this.apiUrl = this.service.getApiUrl();
    }

  public setLogin(data: any){
    this.http.get(this.apiUrl+'/login/'+data.value.login+'&'+data.value.password)
    .subscribe(
      result => {
        if (result!=null){
          this.heure = new Date();
          localStorage.setItem('heure', this.heure);
          localStorage.setItem('result', JSON.stringify(result));
          this.route.navigateByUrl('/bienvenue');
        }
      }
    );
  }


}
