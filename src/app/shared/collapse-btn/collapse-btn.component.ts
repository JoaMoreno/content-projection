import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'collapse-btn',
  templateUrl: './collapse-btn.component.html',
  styleUrls: ['./collapse-btn.component.scss']
})
export class CollapseBtnComponent implements OnInit {

  @Input() id;

  showBody = false

  constructor() { }

  ngOnInit(): void {
  }

}
