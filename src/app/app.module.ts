import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { Route, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './auth/auth.guard';
import { ArticlecardComponent, Dialog } from './components/articlecard/articlecard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import { SellArticleComponent } from './components/sell-article/sell-article.component';
import { ShoppingcartComponent } from './components/shoppingcart/shoppingcart.component';
import { PayComponent } from './components/pay/pay.component';

let routes: Route[] = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'artikelaanbieden', component: SellArticleComponent},
  { path: 'winkelmand', component: ShoppingcartComponent},
  { path: 'pay', component: PayComponent}
];

// canActivate: [AuthGuard]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ArticlecardComponent,
    Dialog,
    SellArticleComponent,
    ShoppingcartComponent,
    PayComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
