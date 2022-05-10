import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader',
  template: `
    <img
      [src]="loader"
      *ngIf="show"
      class="loader"
      [style.width.%]="customWidth"
    />
  `,
  styles: [
    `
      .loader {
        width: 100px;
        display: table;
        margin: 5rem auto;
      }
    `,
  ],
})
export class LoaderComponent implements OnInit {
  @Input() loader: string = '';
  @Input() show: boolean = false;
  @Input() customWidth: string = '0';
  constructor() {}

  ngOnInit(): void {}
}
