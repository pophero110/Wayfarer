import { Component, EventEmitter, Input, Output } from '@angular/core';
import { City, cities } from '../../data/cities';
@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.css'],
})
export class CityListComponent {
  @Output() citySelected: EventEmitter<string> = new EventEmitter<string>();
  @Input() cityId: any;
  cities: City[] = cities;

  selectCity(cityId: string) {
    this.citySelected.emit(cityId);
  }
}
