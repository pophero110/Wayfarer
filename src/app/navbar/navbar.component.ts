import { Component } from '@angular/core';
import { Post, posts } from '../data/posts';
import { City, cities } from '../data/cities';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  searchQuery: string = '';
  filteredPosts: Post[] = [];
  filteredCities: City[] = [];

  search() {
    console.log('Searching for:', this.searchQuery);

    this.filteredPosts = posts.filter(post =>
      post.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
      post.content.toLowerCase().includes(this.searchQuery.toLowerCase())
    );

    this.filteredCities = cities.filter(city =>
      city.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
      city.id.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }
}
