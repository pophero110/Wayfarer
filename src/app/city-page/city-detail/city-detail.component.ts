import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-city-detail',
  templateUrl: './city-detail.component.html',
  styleUrls: ['./city-detail.component.css'],
})
export class CityDetailComponent {
  postContentLimit: number = 70;
  @Input() city: any;
  @Input() posts: any;
  @Input() cityId: any;
  @Input() weather: any;
}
