import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { Subscription } from 'rxjs';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styleUrls: ['./by-region.component.scss'],
})
export class ByRegionComponent implements OnInit {
  regions: string[] = [
    'africa',
    'americas',
    'asia',
    'europe',
    'oceania',
    'antarctic',
  ];
  activeRegion: string = '';
  countries: Country[] = [];
  showLoader: boolean = false;
  private subscription: Subscription = new Subscription();

  constructor(private countryService: CountryService) {}

  ngOnInit(): void {}

  getClassCSS(region: string) {
    return region === this.activeRegion
      ? 'btn btn-info'
      : 'btn btn-outline-info';
  }

  activateRegion(region: string) {
    if (this.activeRegion === region) return;
    this.countries = [];
    this.activeRegion = region;
    this.showLoader = true;
    this.subscription = this.countryService
      .searchCountryByRegion(this.activeRegion)
      .subscribe({
        next: ((countries: Country[]) => {
          this.showLoader = false;
          this.countries = countries;
        }).bind(this),
        error: ((err: any) => {
          console.info(err);
          this.showLoader = false;
          this.countries = [];
        }).bind(this),
      });
  }
}
