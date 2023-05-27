import { Component } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent implements OnInit {
  weather: any;
  constructor(private weatherService: WeatherService) {}
  ngOnInit(): void {
    this.weatherService.findByCityName('London').subscribe((weatherData) => {
      this.weather = weatherData;
    });
  }
}
