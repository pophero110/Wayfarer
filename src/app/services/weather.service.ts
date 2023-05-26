import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  
  findWeather(zip: string){
    this.http
    .get(`http://api.openweathermap.org/data/2.5/weather?zip=30034&appid=6e8eb1701578fb67d5e378ed11490c82`)
    .subscribe((response) => console.log(response));
    console.log('finding ' + zip);
  }
  
  constructor(private http: HttpClient) { }
}
