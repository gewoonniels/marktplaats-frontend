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

let routes: Route[] = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'sellArticle', component: SellArticleComponent, canActivate: [AuthGuard] }
];

// canActivate: [AuthGuard]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ArticlecardComponent,
    Dialog,
    SellArticleComponent
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
