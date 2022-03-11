import { Component, OnInit } from '@angular/core';
import { Clan } from '../../model/clan.model';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-clanovi',
  templateUrl: './clanovi.component.html',
  styleUrls: ['./clanovi.component.scss'],
})
export class ClanoviComponent implements OnInit {
  public clanovi: Array<Clan>;
  constructor(private appService: AppService) {}
  ngOnInit() {
    this.clanovi = this.appService.clanovi;
  }
}
