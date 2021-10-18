import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  navigate: any;
  constructor() {
    this.sideMenu();

  }
    sideMenu(){
      this.navigate = [
        {
          title : 'Accueil',
          url : 'home'
        },
        {
          title : 'listeApprenants',
          url : 'liste-apprenants'
        },
        {
          title : 'deconnexion',
          url : 'home'
        },

      ];
    }



  }

