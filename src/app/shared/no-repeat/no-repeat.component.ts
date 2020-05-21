import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-no-repeat',
  templateUrl: './no-repeat.component.html',
  styleUrls: ['./no-repeat.component.scss']
})
export class NoRepeatComponent implements OnInit {

  myArray=[1,1,1,1,1]

  constructor() { }

  ngOnInit(): void {
  }

}
