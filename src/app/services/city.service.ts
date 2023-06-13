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
   * Checks if the content of a post is valid.
   *
   * @param {Post} post - The post object to validate.
   * @returns {boolean} - True if the content is valid, false otherwise.
   */
  private isContentValid(post: Post): boolean {
    return !!post.content && post.content.length > 0;
  }

  /**
   * Checks if the title of a post is valid.
   *
   * @param {Post} post - The post object to validate.
   * @returns {boolean} - True if the title is valid, false otherwise.
   */
  private isTitleValid(post: Post): boolean {
    const minLength = 2;
    const maxLength = 200;
    return post.title.length > minLength && post.title.length < maxLength;
  }

  /**
   * Finds posts associated with a specific city ID, considering additional validation criteria.
   *
   * @param {string} cityId - The ID of the city to find posts for.
   * @returns {Post[]} - An array of valid posts associated with the city ID.
   */
  findPostsByCityId(cityId: string): Post[] {
    return posts
      .filter((post) => {
        const isCityMatch = post.cityId === cityId;
        const isContentValid = this.isContentValid(post);
        const isTitleValid = this.isTitleValid(post);
        return isCityMatch && isContentValid && isTitleValid;
      })
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
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
