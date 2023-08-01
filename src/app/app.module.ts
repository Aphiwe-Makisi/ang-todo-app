import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AddComponent } from './components/add/add.component';
import { ArchiveComponent } from './components/archive/archive.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ViewComponent } from './components/view/view.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AddComponent,
    ArchiveComponent,
    NotFoundComponent,
    ViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
