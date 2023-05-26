import { Injectable } from '@angular/core';
import { City, cities } from '../data/cities';
import { Post, posts } from '../data/posts';

@Injectable({
  providedIn: 'root',
})
export class CityService {
  constructor() {}

  findCity(cityId: string): City | undefined {
    return cities.find((city) => city.id === cityId);
  }

  findPostsByCityId(cityId: string): Post[] {
    return posts.filter((post) => post.cityId === cityId);
  }

  // allow user to find city by name
  findCityByName(name: string): City | undefined {
    return cities.find(
      (city) => city.name.toLowerCase() === name.toLowerCase()
    );
  }
}
