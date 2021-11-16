import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-button',
  template: `
    <button
      pButton
      type="button"
      label="{{ text }}"
      class="p-button-warning"
      (click)="onClick()"
    ></button>
  `,
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
