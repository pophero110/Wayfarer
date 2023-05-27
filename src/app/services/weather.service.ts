import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  findByCityName(cityName: string): Observable<any> {
    return this.convertCityNameIntoGeo(cityName).pipe(
      switchMap((geoData) => {
        const { lat, lon } = geoData[0];
        return this.http.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=6e8eb1701578fb67d5e378ed11490c82`
        );
      })
    );
  }

  private convertCityNameIntoGeo(cityName: string): Observable<any> {
    return this.http.get(
      `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=6e8eb1701578fb67d5e378ed11490c82`
    );
  }

  constructor(private http: HttpClient) {}
}
