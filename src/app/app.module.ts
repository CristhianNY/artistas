import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { DashboardPageComponent } from './components/dashboard-page/dashboard-page.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';

import {AngularFireModule} from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AuthService} from './services/auth.service'
import {environment} from '../environments/environment';
import {AuthGuard} from './guards/auth.guard';

import {FlashMessagesModule} from 'angular2-flash-messages';
import {FlashMessagesService} from 'angular2-flash-messages';
import { UserTypeComponent } from './components/user-type/user-type.component';
import { InboxComponent } from './components/inbox/inbox.component';
import { EditPromoKitComponent } from './components/edit-promo-kit/edit-promo-kit.component';
import { ToolsComponent } from './components/tools/tools.component';
import { HelpComponent } from './components/help/help.component';
import { GigLeadsComponent } from './components/gig-leads/gig-leads.component';
import { BookedGigsComponent } from './components/booked-gigs/booked-gigs.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { PrivacyComponent } from './components/privacy/privacy.component';
import { TermComponent } from './components/term/term.component';
import { ListBandsComponent } from './components/list-bands/list-bands.component';
import { PayoutsComponent } from './components/payouts/payouts.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavBarComponent,
    RegisterPageComponent,
    LoginPageComponent,
    DashboardPageComponent,
    NotFoundPageComponent,
    UserTypeComponent,
    InboxComponent,
    EditPromoKitComponent,
    ToolsComponent,
    HelpComponent,
    GigLeadsComponent,
    BookedGigsComponent,
    ReviewsComponent,
    PrivacyComponent,
    TermComponent,
    ListBandsComponent,
    PayoutsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    FlashMessagesModule
  ],
  providers: [AuthService,AuthGuard, FlashMessagesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
