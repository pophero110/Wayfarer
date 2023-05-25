import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LogoComponent } from './logo/logo.component';
import { GalleryComponent } from './gallery/gallery.component';
import { TopicsComponent } from './topics/topics.component';
import { CalloutComponent } from './callout/callout.component';
import { CityPageComponent } from './city-page/city-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    GalleryComponent,
    TopicsComponent,
    CalloutComponent,
    CityPageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
