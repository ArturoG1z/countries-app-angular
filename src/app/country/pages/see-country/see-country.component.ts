import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';
import { Subscription, } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-see-country',
  templateUrl: './see-country.component.html',
  styleUrls: ['./see-country.component.scss'],
})
export class SeeCountryComponent implements OnInit {
  country!: Country;
  subParamsActivated: Subscription = new Subscription();
  subCountryService: Subscription = new Subscription();
  showLoader: boolean = false;
  constructor(
    private activatedRoute: ActivatedRoute,
    private countryService: CountryService,
  ) {}

  ngOnInit(): void {
    this.showLoader = true;
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.countryService.getCountryByCode(id)),
        tap(console.log)
      )
      .subscribe({
          next: ((country: Country) => {
            this.country = country;
            this.showLoader = false;
          }).bind(this),
          error: ((err: any) => {
          }).bind(this)
      });
    // using switchMap to get and observable from other observable
    // this.activatedRoute.params.subscribe(({id}) => {
    //   this.countryService.getCountryByCode(id).subscribe((country) => {
    //     this.country = country[0];
    //   })
    // });
  }
}
