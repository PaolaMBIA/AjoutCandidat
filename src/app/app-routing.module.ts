import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateCandidatComponent } from './Entities/create-candidat/create-candidat.component';
import { ListCandidatComponent } from './Entities/list-candidat/list-candidat.component';
import { SiteLayoutComponent } from './Entities/site-layout/site-layout.component';
import { AppLayoutComponent } from './Entities/app-layout/app-layout.component';
import { HomeComponent } from './Entities/home/home.component';

const routes: Routes = [
  { path: '', component: SiteLayoutComponent, 
    children: [
      { path: 'create-candidat', component: CreateCandidatComponent },
      { path: 'list-candidat', component: ListCandidatComponent }
    ] }, 
    
    { path: '', component: AppLayoutComponent,
    children: [
      { path: 'home', component: HomeComponent },
    ] }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }