import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private apiUrl: string = 'https://restcountries.com/v3.1';
  fieldsAll: string[] = ['name', 'capital', 'population', 'cca2', 'flags'];
  fieldsOne: string[] = [];
  paramsPlural: HttpParams;
  paramsSingular: HttpParams;
  constructor(private http: HttpClient) {
    this.fieldsOne = [...this.fieldsAll, 'flag', 'ccn3', 'translations'];
    this.paramsPlural = new HttpParams().set(
      'fields',
      this.fieldsAll.join(',')
    );
    this.paramsSingular = new HttpParams().set(
      'fields',
      this.fieldsOne.join(',')
    );
  }

  searchCountry(term: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.apiUrl}/name/${term}`, {
      params: this.paramsPlural,
    }); //.pipe(catchError(err => of([])));
  }

  searchCountryByCapital(term: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.apiUrl}/capital/${term}`, {
      params: this.paramsPlural,
    }); //.pipe(catchError(err => of([])));
  }

  searchCountryByRegion(term: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.apiUrl}/region/${term}`, {
      params: this.paramsPlural,
    }); //.pipe(catchError(err => of([])));
  }

  getCountryByCode(term: string): Observable<Country> {
    return this.http.get<Country>(`${this.apiUrl}/alpha/${term}`, {
      params: this.paramsSingular,
    }); //.pipe(catchError(err => of([])));
  }
}
