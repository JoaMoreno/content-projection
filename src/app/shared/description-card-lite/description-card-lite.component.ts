import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'description-card-lite',
  templateUrl: './description-card-lite.component.html',
  styleUrls: ['./description-card-lite.component.scss']
})
export class DescriptionCardLiteComponent implements OnInit {

  @Input() data;

  constructor() { }

  ngOnInit(): void {
  }

}
