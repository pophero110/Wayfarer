import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { City } from 'src/app/data/cities';
import { CityService } from 'src/app/services/city.service';
@Component({
  selector: 'app-city-page',
  templateUrl: './city-page.component.html',
  styleUrls: ['./city-page.component.css'],
})
export class CityPageComponent {
  handleCitySelected(cityId: string) {
    this.cityId = cityId;
    this.city = this.cityService.findCityById(this.cityId);
    this.posts = this.cityService.findPostsByCityId(this.cityId);
  }
  cityId!: string;
  city: any;
  posts: any;
  weather: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cityService: CityService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      let city: City | undefined;
      if (id !== null) city = this.cityService.findCityById(id);
      if (city) {
        this.city = city;
        this.cityId = city.id;
        this.posts = this.cityService.findPostsByCityId(city.id);
      } else {
        this.router.navigate(['/404']);
      }
    });
  }
}
