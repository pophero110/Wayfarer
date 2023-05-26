import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from '../landing-page/landing-page-component/landing-page.component';
import { CityPageComponent } from '../city-page/city-page-component/city-page.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { PostShowPageComponent } from '../post-show-page/post-show-page.component';

// https://angular.io/guide/router#displaying-a-404-page
// Documentation for using router
const routes: Routes = [
  { path: 'cities/:id', component: CityPageComponent },
  { path: 'city/london', component: CityPageComponent, data: { city: 'London' } },
  { path: 'city/gibraltar', component: CityPageComponent, data: { city: 'Gibraltar' } },
  { path: 'posts/:id', component: PostShowPageComponent },
  { path: '404', component: PageNotFoundComponent },
  { path: '**', component: LandingPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutingModule {}
