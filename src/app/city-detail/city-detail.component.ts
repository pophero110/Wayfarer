import { Component, Input, OnInit } from '@angular/core';
import { Post, posts } from '../data/posts';
import { City, cities } from '../data/cities';
@Component({
  selector: 'app-city-detail',
  templateUrl: './city-detail.component.html',
  styleUrls: ['./city-detail.component.css'],
})
export class CityDetailComponent implements OnInit {
  @Input() cityId?: string;
  posts?: Post[];
  cities: City[] = cities;
  city?: City;
  ngOnInit(): void {
    this.city = this.cities.find((city) => city.id === this.cityId);
    this.posts = posts.filter((post) => post.cityId === this.cityId);
  }
}
