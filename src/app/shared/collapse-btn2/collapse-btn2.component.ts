import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'collapse-btn2',
  templateUrl: './collapse-btn2.component.html',
  styleUrls: ['./collapse-btn2.component.scss']
})
export class CollapseBtn2Component implements OnInit {

  @Input() id;
  @Input() color;
  @Output() clickEvent: EventEmitter<string> = new EventEmitter()
  emit(){
    this.clickEvent.emit()
  }

  constructor() { }

  ngOnInit(): void {
  }
}
