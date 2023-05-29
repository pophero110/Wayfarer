import { Injectable } from '@angular/core';
import { City, cities } from '../data/cities';
import { Post, posts } from '../data/posts';

@Injectable({
  providedIn: 'root',
})
export class CityService {
  constructor() {}

  /**
   * Finds a city by its ID.
   *
   * @param {string} cityId - The ID of the city to find.
   * @returns {City | undefined} - The city object if found, undefined otherwise.
   */
  findCityById(cityId: string): City | undefined {
    return cities.find((city) => city.id === cityId);
  }

  /**
   * Finds posts associated with a specific city ID.
   *
   * @param {string} cityId - The ID of the city to find posts for.
   * @returns {Post[]} - An array of posts associated with the city ID.
   */
  findPostsByCityId(cityId: string): Post[] {
    return posts.filter((post) => post.cityId === cityId);
  }

  /**
   * Finds a city by its name, case-insensitive.
   *
   * @param {string} name - The name of the city to find.
   * @returns {City | undefined} - The city object if found, undefined otherwise.
   */
  findCityByName(name: string): City | undefined {
    return cities.find(
      (city) => city.name.toLowerCase() === name.toLowerCase()
    );
  }
}
