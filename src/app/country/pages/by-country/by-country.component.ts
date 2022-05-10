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
  showLoader: boolean = false;
  private subscription: Subscription = new Subscription();

  constructor(private countryService: CountryService) {}

  ngOnInit(): void {}

  search(term: string): void {
    this.term = term;
    this.showLoader = true;
    this.subscription = this.countryService.searchCountry(this.term).subscribe(
      (countries) => {
        this.showLoader = false;
        this.countries = countries;
        this.isAnError = false;
      },
      (err) => {
        console.info(err);
        this.showLoader = false;
        this.isAnError = true;
        this.countries = [];
      }
    );
  }

  suggest(term: string): void {
    let idTimeOut = setTimeout(() => {
      this.isAnError = false;
      clearTimeout(idTimeOut);
    }, 1500);
    
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
