import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
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
import { ErrorPageComponent } from './error-page/error-page.component';
import { ForgetComponent } from './login/forget/forget.component';
import { RegFormComponent } from './login/reg-form/reg-form.component';
import { FormComponent } from './login/form/form.component';

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
    ToFavComponent,
    ErrorPageComponent,
    ForgetComponent,
    RegFormComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SlickCarouselModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
