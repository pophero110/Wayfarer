import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopicsComponent } from './topics/topics.component';
import { GalleryComponent } from './gallery/gallery.component';
import { CalloutComponent } from './callout/callout.component';
import { LandingPageComponent } from './landing-page-component/landing-page.component';

@NgModule({
  declarations: [
    LandingPageComponent,
    TopicsComponent,
    GalleryComponent,
    CalloutComponent,
  ],
  imports: [CommonModule],
  exports: [
    LandingPageComponent,
    TopicsComponent,
    GalleryComponent,
    CalloutComponent,
  ],
})
export class LandingPageModule {}
