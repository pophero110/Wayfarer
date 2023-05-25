import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LogoComponent } from './logo/logo.component';
import { GalleryComponent } from './gallery/gallery.component';
import { TopicsComponent } from './topics/topics.component';
import { CalloutComponent } from './callout/callout.component';
import { CityPageComponent } from './city-page/city-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { RoutingModule } from './routing/routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { CityListComponent } from './city-list/city-list.component';
import { CityDetailComponent } from './city-detail/city-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
// import { SearchQueryDirective } from './search-query.directive';

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    GalleryComponent,
    TopicsComponent,
    CalloutComponent,
    LandingPageComponent,
    NavbarComponent,
    CityPageComponent,
    CityListComponent,
    CityDetailComponent,
    PageNotFoundComponent,
    SearchBarComponent,
    
    // SearchQueryDirective,
  ],
  imports: [BrowserModule, RoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
