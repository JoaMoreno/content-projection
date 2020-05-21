import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-two',
  templateUrl: './card-two.component.html',
  styleUrls: ['./card-two.component.scss']
})
export class CardTwoComponent implements OnInit {

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
