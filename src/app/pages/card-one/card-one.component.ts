import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-one',
  templateUrl: './card-one.component.html',
  styleUrls: ['./card-one.component.scss']
})
export class CardOneComponent implements OnInit {

  dataButton = {
    title: "Total",
    debt: 1090
  }
  dataBody = [
    {
      name: "Netflix",
      description:"Lorem Ipsum",
      toPay: 350
    },
    {
      name: "Spotify",
      description:"Lorem Ipsum",
      toPay: 260
    },
    {
      name: "Mercado Libre",
      description:"Lorem Ipsum",
      toPay: 480
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
