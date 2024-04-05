import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';
import { Country } from '../interfaces/country';


@Injectable({providedIn: 'root'})

export class CountriesService {

  private apiUrl: string = 'https://restcountries.com/v3.1'

  constructor(private http: HttpClient) {

   }

   searchCountryByAlphaCode(code: string): Observable <Country | null>{
    const url = `${this.apiUrl}/alpha/${code}`
    return this.http.get <Country[]>(url)
      .pipe(//of sirve para construir un observable basado en el argumento que se le pasa
        map (countries => countries.length > 0 ? countries[0] : null),
        catchError(error =>of (null))
      )
  }

   //metodo que hace una solicitud a la API
   searchCapital( termBusqueda: string ): Observable <Country[]> {
    const url = `${this.apiUrl}/capital/${termBusqueda}`
    // Se espera recibir un array de objetos de tipo Country como respuesta
    // por lo que se especifica <Country[]> en la declaración del Observable.
    //con el return voy a devolver el observable
    return this.http.get <Country[]>(url)
    .pipe(
      //of sirve para construir un observable basado en el argumento que se le pasa
      catchError(error => of ([]))
    )
   }

   searchCountry(termBusqueda2: string): Observable <Country[]>{
      const url = `${this.apiUrl}/name/${termBusqueda2}`
      return this.http.get <Country[]>(url)
        .pipe(//of sirve para construir un observable basado en el argumento que se le pasa
          catchError(error =>of ([]))
        )
    }

    searchRegion(region: string): Observable <Country[]>{
      const url = `${this.apiUrl}/region/${region}`
      return this.http.get <Country[]>(url)
        .pipe(//of sirve para construir un observable basado en el argumento que se le pasa
          catchError(error =>of ([]))
        )
    }




}
