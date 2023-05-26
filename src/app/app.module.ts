import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LogoComponent } from './logo/logo.component';
import { RoutingModule } from './routing/routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SearchQueryDirective } from './directives/search-query.directive';
import { LandingPageModule } from './landing-page/landing-page.module';
import { CityPageModule } from './city-page/city-page.module';
import { PostShowPageComponent } from './post-show-page/post-show-page.component';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    NavbarComponent,
    PageNotFoundComponent,
    SearchQueryDirective,
    PostShowPageComponent,

  ],
  imports: [BrowserModule, RoutingModule, LandingPageModule, CityPageModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
