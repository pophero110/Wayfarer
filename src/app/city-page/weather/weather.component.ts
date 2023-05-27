import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent implements OnChanges {
  @Input() cityName: any;
  weather: any;
  constructor(private weatherService: WeatherService) {}

  async ngOnChanges(changes: SimpleChanges): Promise<void> {
    try {
      const weatherData = await this.weatherService
        .findByCityName(this.cityName)
        .toPromise();
      console.log({ weatherData });
      this.weather = weatherData;
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  }
}
