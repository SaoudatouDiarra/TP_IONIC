import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bienvenue',
  templateUrl: './bienvenue.page.html',
  styleUrls: ['./bienvenue.page.scss'],
})
export class BienvenuePage implements OnInit {
  public result;
  public heure;
  constructor() { }

  ngOnInit() {
    this.result = JSON.parse(localStorage.getItem('result'));
    this.heure = localStorage.getItem('heure');
  }

}
