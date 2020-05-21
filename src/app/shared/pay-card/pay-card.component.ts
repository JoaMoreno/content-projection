import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pay-card',
  templateUrl: './pay-card.component.html',
  styleUrls: ['./pay-card.component.scss']
})
export class PayCardComponent implements OnInit {

  @Input() data;

  constructor() { }

  ngOnInit(): void {
  }

}
