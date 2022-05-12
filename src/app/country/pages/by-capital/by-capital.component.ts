import { Component, OnInit, OnDestroy } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html',
  styleUrls: ['./by-capital.component.scss'],
})
export class ByCapitalComponent implements OnInit, OnDestroy {
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
    this.subscription = this.countryService
      .searchCountryByCapital(this.term)
      .subscribe({
        next: ((countries: Country[]) => {
          this.showLoader = false;
          this.countries = countries;
          this.isAnError = false;
        }).bind(this),
        error: ((err: any) => {
          console.info(err);
          this.showLoader = false;
          this.isAnError = true;
          this.countries = [];
        }).bind(this),
      });
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
