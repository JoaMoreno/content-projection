import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'description-card',
  templateUrl: './description-card.component.html',
  styleUrls: ['./description-card.component.scss']
})
export class DescriptionCardComponent implements OnInit {

  @Input() data;

  constructor() { }

  ngOnInit(): void {
  }

}
