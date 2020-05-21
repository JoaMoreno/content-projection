import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multi-layer',
  templateUrl: './multi-layer.component.html',
  styleUrls: ['./multi-layer.component.scss']
})
export class MultiLayerComponent implements OnInit {

  dataButton = {
    title: "Hola!",
    debt: 1090
  }

  clicksNumber= 0

  constructor() { }

  ngOnInit(): void {
  }

  plus(){
    this.clicksNumber++
  }

}
