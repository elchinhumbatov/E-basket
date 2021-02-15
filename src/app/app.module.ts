import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import * as $ from 'jquery';


import { AppComponent } from './app.component';
import { CategoriesComponent } from './categories/categories.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { BasketComponent } from './basket/basket.component';
import { HomepageComponent } from './home/homepage/homepage.component';
import { CampaignComponent } from './home/campaign/campaign.component';
import { CardsComponent } from './home/cards/cards.component';
import { AboutComponent } from './home/about/about.component';
import { FeedbackComponent } from './home/feedback/feedback.component';
import { ProductsComponent } from './products/products.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ToFavComponent } from './to-fav/to-fav.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    FavoritesComponent,
    BasketComponent,
    HomepageComponent,
    CampaignComponent,
    CardsComponent,
    AboutComponent,
    FeedbackComponent,
    ProductsComponent,
    CheckoutComponent,
    ToFavComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SlickCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
