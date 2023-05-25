import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from '../landing-page/landing-page.component';
import { CityPageComponent } from '../city-page/city-page.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';

// https://angular.io/guide/router#displaying-a-404-page
// Documentation for using router
const routes: Routes = [
  { path: 'cities/:id', component: CityPageComponent },
  { path: '404', component: PageNotFoundComponent },
  { path: '', component: LandingPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutingModule {}
