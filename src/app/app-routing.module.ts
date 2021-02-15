import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasketComponent } from './basket/basket.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { HomepageComponent } from './home/homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'products', component: ProductsComponent },
  {path: 'favorites', component: FavoritesComponent},
  {path: 'basket', component: BasketComponent},
  {path: 'login', component: LoginComponent},
  {path: 'checkout', component: CheckoutComponent},
  {path: 'products/:id', component: ProductsComponent},
  {path: 'basket/:idx', component: BasketComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
