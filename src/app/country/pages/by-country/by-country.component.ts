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
  showLoader: boolean = false;
  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
  }

  search(term: string): void {
    this.term = term;
    this.showLoader = true;
    this.countryService.searchCountry(this.term).subscribe(countries => {
      this.showLoader = false;
      this.countries = countries;
      this.isAnError = false;
    }, err => {
      console.info(err);
      this.showLoader = false;
      this.isAnError = true;
      this.countries = [];
    });
  }
}
