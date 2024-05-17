import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    title: 'home',
    component: HomeComponent,
  },
  {
    path: 'about',
    title: 'about',
    component: AboutComponent,
  },
  {
    path: 'contact',
    title: 'contact',
    component: ContactComponent,
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];
