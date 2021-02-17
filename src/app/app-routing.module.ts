import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasketComponent } from './basket/basket.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { HomepageComponent } from './home/homepage/homepage.component';
import { ForgetComponent } from './login/forget/forget.component';
import { FormComponent } from './login/form/form.component';
import { LoginComponent } from './login/login.component';
import { RegFormComponent } from './login/reg-form/reg-form.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'products', component: ProductsComponent },
  {path: 'favorites', component: FavoritesComponent},
  {path: 'basket', component: BasketComponent},
  {path: 'login', component: LoginComponent, children: [
    {path: 'forget', component: ForgetComponent},
    {path: 'form', component: FormComponent},
    {path: 'reg', component: RegFormComponent}
  ]},
  {path: 'checkout', component: CheckoutComponent},
  {path: 'products/:id', component: ProductsComponent},
  {path: 'basket/:idx', component: BasketComponent},
  {path: 'error', component: ErrorPageComponent},
  {path: '**', redirectTo: '/error'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
