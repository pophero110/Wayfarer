import { Injectable } from '@angular/core';
import { City, cities } from '../data/cities';

@Injectable({
  providedIn: 'root',
})
export class CityService {
  constructor() {}

  findCity(cityId: string): City | undefined {
    return cities.find((city) => city.id === cityId);
  }
}
