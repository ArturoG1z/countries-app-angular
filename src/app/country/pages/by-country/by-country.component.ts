import { Component, OnInit, OnDestroy } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styleUrls: ['./by-country.component.scss'],
})
export class ByCountryComponent implements OnInit, OnDestroy {
  term: string = '';
  isAnError: boolean = false;
  countries: Country[] = [];
  sugestedCountries: Country[] = [];
  showLoader: boolean = false;
  showSuggest: boolean = false;
  private subscription: Subscription = new Subscription();

  constructor(private countryService: CountryService) {}

  ngOnInit(): void {}

  search(term: string): void {
    this.term = term.trim();
    if (!term) {
      return;
    }
    this.showLoader = true;
    this.showSuggest = false;
    this.subscription = this.countryService.searchCountry(this.term).subscribe({
      next: ((countries: Country[]) => {
        this.showLoader = false;
        this.countries = countries;
        this.isAnError = false;
      }).bind(this),
      error: ((err: any) => {
        this.showLoader = false;
        this.isAnError = true;
        this.countries = [];
      }).bind(this),
    });
  }

  suggest(term: string): void {
    this.isAnError = false;
    this.showSuggest = true;
    this.countryService
    .searchCountry(term)
    .subscribe((countries: Country[]) => {
        this.sugestedCountries = countries.splice(0, 5);
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
