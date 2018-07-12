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
import { FeedBodyComponent} from './welcome-page/feed/feed-body/feed-body.component';
import { FeedNavComponent } from './welcome-page/feed/feed-nav/feed-nav.component';
import { FeedNavSearchComponent } from './welcome-page/feed/feed-nav/feed-nav-search/feed-nav-search.component';
import { FeedNavFilterComponent } from './welcome-page/feed/feed-nav/feed-nav-filter/feed-nav-filter.component';
import { FeedWidgetComponent } from './welcome-page/feed/feed-widget/feed-widget.component'
import { HeaderComponent } from './shared/header/header.component';
import { FeedNavExpandComponent } from './welcome-page/feed/feed-nav-expand/feed-nav-expand.component';import { FeedBodyComponent } from './welcome-page/feed/feed-body/feed-body.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    WelcomePageComponent,
    ProfileComponent,
    FeedComponent,
    PortraitComponent,
    BioComponent,
    FeedBodyComponent,
    FeedNavComponent,
    FeedNavSearchComponent,
    FeedNavFilterComponent,
    FeedWidgetComponent,
    HeaderComponent,
    FeedWidgetComponent,
    FeedBodyComponent,
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
