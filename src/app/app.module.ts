import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ApiService} from './service/candidat-service.service';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from "@angular/forms";
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';


import { CreateCandidatComponent } from './Entities/create-candidat/create-candidat.component';
import { ListCandidatComponent } from './Entities/list-candidat/list-candidat.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SiteHeaderComponent } from './Entities/site-header/site-header.component';
import { HomeComponent } from './Entities/home/home.component';
import { SiteLayoutComponent } from './Entities/site-layout/site-layout.component';
import { AppLayoutComponent } from './Entities/app-layout/app-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateCandidatComponent,
    ListCandidatComponent,
    SiteHeaderComponent,
    HomeComponent,
    SiteLayoutComponent,
    AppLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatToolbarModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
