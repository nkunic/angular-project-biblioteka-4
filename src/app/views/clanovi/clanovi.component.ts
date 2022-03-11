import { Component, OnInit } from '@angular/core';
import { Clan } from '../../model/clan.model';

@Component({
  selector: 'app-clanovi',
  templateUrl: './clanovi.component.html',
  styleUrls: ['./clanovi.component.scss'],
})
export class ClanoviComponent implements OnInit {
  public clanovi: Array<Clan> = [
    {
      id: 1,
      ime: 'Amel Hadzifejzović',
      knjiga: {
        id: 1,
        autor: 'Haled Hoseini',
        naslov: 'Hiljadu čudesnih sunaca',
      },
    },
    {
      id: 2,
      ime: 'Vanja Milivojević',
      knjiga: {
        id: 2,
        autor: 'Džodi Pikol',
        naslov: 'Čuvar svoje sestre',
      },
    },
    {
      id: 3,
      ime: 'Marija Stevanović',
      knjiga: {
        id: 3,
        autor: 'J.K.Rouling',
        naslov: 'Hari Poter i Red Feniksa',
      },
    },
  ];

  constructor() {}

  ngOnInit() {}
}
