import { Component, OnInit } from '@angular/core';
import { Knjiga } from '../../model/knjiga.model';
import { BibliotekaService } from '../../services/biblioteka.service';

@Component({
  selector: 'app-knjige',
  templateUrl: './knjige.component.html',
  styleUrls: ['./knjige.component.scss'],
})

export class KnjigeComponent implements OnInit {
  public knjige: Array<Knjiga>;
  constructor(private appService: BibliotekaService) {}
  ngOnInit() {
    this.knjige = this.appService.knjige;
  }
}

//export class KnjigeComponent {
//  public knjige: Array<Knjiga> = [
//    {
//      id: 1,
//      autor: 'Haled Hoseini',
//      naslov: 'Hiljadu čudesnih sunaca',
//    },
//    {
//      id: 2,
//      autor: 'Džodi Pikol',
//      naslov: 'Čuvar svoje sestre',
//    },
//    {
//      id: 3,
//      autor: 'J.K.Rouling',
//      naslov: 'Hari Poter i Red Feniksa',
//    },
//  ];
//}
