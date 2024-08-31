import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShowBookComponent } from './show-book/show-book.component';
import { AddBookComponent } from './add-book/add-book.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import {  FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShowBookComponent,
    AddBookComponent,
    
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
