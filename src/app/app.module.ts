import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LogoComponent } from './logo/logo.component';
import { CityPageComponent } from './city-page/city-page.component';
import { RoutingModule } from './routing/routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { CityListComponent } from './city-list/city-list.component';
import { CityDetailComponent } from './city-detail/city-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormsModule } from '@angular/forms';
import { SearchQueryDirective } from './directives/search-query.directive';
import { LandingPageModule } from './landing-page/landing-page.module';

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    NavbarComponent,
    CityPageComponent,
    CityListComponent,
    CityDetailComponent,
    PageNotFoundComponent,
    SearchQueryDirective,
  ],
  imports: [BrowserModule, RoutingModule, FormsModule, LandingPageModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
