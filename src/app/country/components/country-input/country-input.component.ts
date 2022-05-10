import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-country-input',
  templateUrl: './country-input.component.html',
  styleUrls: ['./country-input.component.scss']
})
export class CountryInputComponent implements OnInit {
  @Input() term: string = '';
  constructor() { }

  ngOnInit(): void {
  }

  @Output() onEnter: EventEmitter<string> = new EventEmitter<string>();

  search(): void {
    this.onEnter.emit(this.term);
  }
}
