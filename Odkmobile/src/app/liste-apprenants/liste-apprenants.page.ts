import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../service/services.service';

@Component({
  selector: 'app-liste-apprenants',
  templateUrl: './liste-apprenants.page.html',
  styleUrls: ['./liste-apprenants.page.scss'],
})
export class ListeApprenantsPage implements OnInit {
  public apprenants;
  constructor(private monService: ServicesService) {
    this.apprenants = this.monService.getListe();
   }

  ngOnInit() {
  }

}
