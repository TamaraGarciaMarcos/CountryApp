import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './shared/pages/home-page/home-page.component';
import { AboutPageComponent } from './shared/pages/about-page/about-page.component';
import { ContactPageComponent } from './shared/pages/contact-page/contact-page.component';
import { CountriesModule } from './countries/countries.module';

//definicion de las rutas:
const routes: Routes =[
  {//ruta del homePage: http://localhost:4200/home
  path: '',
  component: HomePageComponent,
  },
  {//Ruta sobre el aboutPAge: http://localhost:4200/about
    path: 'about',
    component: AboutPageComponent,
  },
  {//Ruta sobre el aboutPAge: http://localhost:4200/contact
    path: 'contact',
    component: ContactPageComponent,
  },
  {//Ruta para el componente Countries con LazyLoad
    path: 'countries',
    loadChildren: () => import ('./countries/countries.module').then(m => CountriesModule),
    //para acceder a las rutas que contiene Countries

  },
  {//ruta cuando no es nignuna de las anteriores, ejemplo http://localhost:4200
    path: '**',
    redirectTo: '',
  }
]


@NgModule({
  imports: [
    //al ser el módulo router principal se define:
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
  ]
})
export class AppRoutingModule { }
