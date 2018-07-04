import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Component imports
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AppRoutingModule } from './/app-routing.module';

// Service imports

import { ApplicationStateService } from './services/application-state.service';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { ProfileComponent } from './welcome-page/profile/profile.component';
import { FeedComponent } from './welcome-page/feed/feed.component';
import { PortraitComponent } from './welcome-page/profile/portrait/portrait.component';
import { BioComponent } from './welcome-page/profile/bio/bio.component';
import { FeedNavComponent } from './welcome-page/feed/feed-nav/feed-nav.component';
import { FeedNavSearchComponent } from './welcome-page/feed/feed-nav/feed-nav-search/feed-nav-search.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    WelcomePageComponent,
    ProfileComponent,
    FeedComponent,
    PortraitComponent,
    BioComponent,
    FeedNavComponent,
    FeedNavSearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [ 
    ApplicationStateService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
