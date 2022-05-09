import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styleUrls: ['./by-country.component.scss']
})
export class ByCountryComponent implements OnInit {
  term = '';
  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
  }

  search() {
    console.log(this.term);
    this.countryService.searchCountry(this.term).subscribe(data => {
      console.log(data);
    });
  }
}
