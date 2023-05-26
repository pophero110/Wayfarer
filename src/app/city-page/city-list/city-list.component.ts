import { Component, Input } from '@angular/core';
import { City, cities } from '../../data/cities';
@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.css'],
})
export class CityListComponent {
  @Input() cityId?: string;
  cities: City[] = cities;
}
