import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'number-card-component',
  template: `
    <div class="box">{{ innerNumber }}</div>
    <app-button (btnClick)="addButton()" text="Add"> </app-button>
    <app-button (btnClick)="decreaseButton()" text="Decrease"> </app-button>
  `,
  styles: [
    `
      .box {
        height: 90px;
        width: 80px;
        border: 1px solid black;
        text-align: center;
      }
    `,
  ],
})
export class NumberCardComponent implements OnInit {
  innerNumber: number = 0;

  constructor() {}

  addButton() {
    this.addNumber();
    this.setData();
  }

  decreaseButton(){
    this.decreaseNumber();
    this.setData();
  }


  addNumber() {
    this.innerNumber += 1;
  }

  decreaseNumber(){
    this.innerNumber -= 1;
  }

  setData() {
    const jsonData = JSON.stringify(this.innerNumber);
    localStorage.setItem('innerNumber', jsonData);
    console.log(jsonData);
  }

  getData() {
    return localStorage.getItem('innerNumber');
  }
  ngOnInit() {
    this.getData();
    this.innerNumber = Number(this.getData());
  }
}
