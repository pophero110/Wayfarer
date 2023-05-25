import { Component } from '@angular/core';

// represent the city object
interface City {
  iconUrl: string;
  name: string;
}

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.css'],
})
export class CityListComponent {
  cities: City[] = [
    { name: 'London', iconUrl: '../../assets/images/1.jpeg' },
    { name: 'Sydney', iconUrl: '../../assets/images/2.webp' },
    { name: 'San Francisco', iconUrl: '../../assets/images/3.jpeg' },
    { name: 'Seattle', iconUrl: '../../assets/images/4.jpeg' },
  ];
}
