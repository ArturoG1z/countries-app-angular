import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styleUrls: ['./by-country.component.scss']
})
export class ByCountryComponent implements OnInit {
  term:string = '';
  isAnError: boolean = false;
  countries: Country[] = [];
  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
  }

  search() {
    console.log(this.term);
    this.countryService.searchCountry(this.term).subscribe(countries => {
      this.countries = countries;
      this.isAnError = false;
    }, err => {
      console.info(err);
      this.isAnError = true;
      this.countries = [];
    });
  }
}
