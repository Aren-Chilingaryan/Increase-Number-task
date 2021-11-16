import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  template: ` <button class="btn" (click)="onClick()">{{ text }}</button> `,
  styles: [
    `
      .btn {
        width: 80px;
        height: 25px;
      }
    `,
  ],
})
export class AppButtonComponent implements OnInit {
  @Output() btnClick = new EventEmitter<any>();
  @Input() text: string = '';

  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.btnClick.emit();
  }
}
