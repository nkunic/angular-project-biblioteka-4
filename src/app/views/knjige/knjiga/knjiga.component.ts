import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-knjiga',
  templateUrl: './knjiga.component.html',
  styleUrls: ['./knjiga.component.scss']
})
export class KnjigaComponent {

  @Input() id: number = 0;
  @Input() autor: string = '';
  @Input() naslov: string = '';

}