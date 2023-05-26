import { Directive, HostListener } from '@angular/core';
import { CityService } from '../services/city.service';
import { Router } from '@angular/router';

@Directive({
  selector: '[appSearchQuery]',
})
export class SearchQueryDirective {
  constructor(private cityService: CityService, private router: Router) {}

  @HostListener('submit', ['$event'])
  onSubmit(event: Event) {
    if (event.target !== null) {
      const inputElement = (event.target as HTMLInputElement).querySelector(
        'input'
      );
      if (inputElement !== null) {
        let cityName = inputElement.value;
        let city = this.cityService.findCityByName(cityName);
        if (city) {
          this.router.navigate(['/cities/' + city.id]);
        } else {
          alert('The city can not found with name ' + cityName);
        }
      }
    }
  }
}
