import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ByCountryComponent } from './country/pages/by-country/by-country.component';
import { ByCapitalComponent } from './country/pages/by-capital/by-capital.component';
import { ByRegionComponent } from './country/pages/by-region/by-region.component';
import { SeeCountryComponent } from './country/pages/see-country/see-country.component';

const routes: Routes = [
  {
    path: '',
    component: ByCountryComponent,
    pathMatch: 'full',
  },
  {
    path: 'region',
    component: ByRegionComponent
    /* loadChildren: () =>
      import('./country/pages/by-region/by-region.component').then(
        (m) => m.ByRegionComponent
      ), */
  },
  {
    path: 'capital',
    component: ByCapitalComponent
  },
  {
    path: 'country/:id',
    component: SeeCountryComponent
    /* loadChildren: () =>
      import('./country/pages/see-country/see-country.component').then(
        (m) => m.SeeCountryComponent
      ), */
  },
  {
    path: '**',
    redirectTo: '',
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class AppRoutingModule {}
