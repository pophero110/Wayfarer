import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CityDetailComponent } from './city-detail/city-detail.component';
import { CityListComponent } from './city-list/city-list.component';
import { CityPageComponent } from './city-page-component/city-page.component';
import { RoutingModule } from '../routing/routing.module';
import { WeatherComponent } from './weather/weather.component';

@NgModule({
  declarations: [
    CityDetailComponent,
    CityListComponent,
    CityPageComponent,
    WeatherComponent,
  ],
  imports: [CommonModule, RoutingModule],
  exports: [CityDetailComponent, CityListComponent, CityPageComponent],
})
export class CityPageModule {}
