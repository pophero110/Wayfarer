import { Component } from '@angular/core';
import { Post, posts } from '../data/posts';
import { City, cities } from '../data/cities';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  // searchQuery: string = '';
  // filteredPosts: Post[] = [];
  // filteredCities: City[] = [];

  // search() {
  //   console.log('Searching for:', this.searchQuery);

  //   this.filteredPosts = posts.filter(post =>
  //     post.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
  //     post.content.toLowerCase().includes(this.searchQuery.toLowerCase())
  //   );

  //   this.filteredCities = cities.filter(city =>
  //     city.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
  //     city.id.toLowerCase().includes(this.searchQuery.toLowerCase())
  //   );

  }
// }

