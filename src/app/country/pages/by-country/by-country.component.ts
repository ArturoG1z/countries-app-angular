import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styleUrls: ['./by-country.component.scss']
})
export class ByCountryComponent implements OnInit {
  term = '';
  constructor() { }

  ngOnInit(): void {
  }

  search() {
    console.log(this.term);
    // private apiUrl: string = https://restcountries.com/v3.1/name/
  }
}
