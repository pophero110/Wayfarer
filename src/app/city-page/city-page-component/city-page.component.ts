import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CityService } from '../../services/city.service';
@Component({
  selector: 'app-city-page',
  templateUrl: './city-page.component.html',
  styleUrls: ['./city-page.component.css'],
})
export class CityPageComponent implements OnInit {
  cityId: any;
  constructor(
    private route: ActivatedRoute,
    private cityService: CityService,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id !== null) {
        if (this.cityService.findCity(id)) {
          this.cityId = id;
        } else {
          this.router.navigate(['/404']);
        }
      }
    });
  }
}
