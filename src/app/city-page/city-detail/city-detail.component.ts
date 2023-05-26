import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../../data/posts';
import { City } from '../../data/cities';
import { CityService } from '../../services/city.service';
@Component({
  selector: 'app-city-detail',
  templateUrl: './city-detail.component.html',
  styleUrls: ['./city-detail.component.css'],
})
export class CityDetailComponent implements OnInit {
  @Input() cityId!: string;
  posts!: Post[];
  city?: City;
  constructor(private cityService: CityService) {}
  ngOnInit(): void {
    this.city = this.cityService.findCityById(this.cityId);
    this.posts = this.cityService.findPostsByCityId(this.cityId);
  }
}
