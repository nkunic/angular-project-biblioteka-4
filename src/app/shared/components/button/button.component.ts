import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() style: 'primary' | 'gray' = 'primary';
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() radius: 'no' | 'small' = 'small';
}
