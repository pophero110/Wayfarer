import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CityDetailComponent } from './city-detail/city-detail.component';
import { CityListComponent } from './city-list/city-list.component';
import { CityPageComponent } from './city-page-component/city-page.component';
import { RoutingModule } from '../routing/routing.module';

@NgModule({
  declarations: [CityDetailComponent, CityListComponent, CityPageComponent],
  imports: [CommonModule, RoutingModule],
  exports: [CityDetailComponent, CityListComponent, CityPageComponent],
})
export class CityPageModule {}
