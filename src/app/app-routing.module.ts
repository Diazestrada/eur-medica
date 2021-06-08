import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component'
import { ListEpsComponent } from './eps/list-eps/list-eps.component'
import { ListPersonComponent } from './person/list-person/list-person.component'

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'person', component: ListPersonComponent },
  { path: 'eps', component: ListEpsComponent },
  { path: '**', redirectTo: '/home' }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
