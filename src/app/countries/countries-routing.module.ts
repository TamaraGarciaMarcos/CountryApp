import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page.component';
import { ByRegionPageComponent } from './pages/by-region-page/by-region-page.component';
import { ByCountryPageComponent } from './pages/by-country-page/by-country-page.component';
import { CountryPageComponent } from './pages/country-page/country-page.component';

const routes : Routes = [
  {
    path:'by-capital',
    component: ByCapitalPageComponent,
  },
  {
    path:'by-region',
    component: ByRegionPageComponent,
  },
  {
    path:'by-country',
    component: ByCountryPageComponent,
  },
  {
    //solicitud de path de forma dinámica
    path:'by/:id',
    component: CountryPageComponent,
  },
  {//ruta cuando no es nignuna de las anteriores, ejemplo http://localhost:4200
    path: '**',
    redirectTo: 'by-capital',
  }

]


@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class CountriesRoutingModule { }
