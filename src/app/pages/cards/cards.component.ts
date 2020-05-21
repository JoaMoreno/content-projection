import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

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
