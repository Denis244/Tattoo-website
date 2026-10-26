import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Portfolio } from './pages/portfolio/portfolio';
import { About } from './pages/about/about';
import { Faq } from './pages/faq/faq';
import { Aftercare } from './pages/aftercare/aftercare';
import { Contact } from './pages/contact/contact';

export const routes: Routes = [
  { path: '',          component: Home,      title: 'Gia Tattoo' },
  { path: 'portfolio', component: Portfolio, title: 'Portfolio — Gia Tattoo' },
  { path: 'about',     component: About,     title: 'About — Gia Tattoo' },
  { path: 'faq',       component: Faq,       title: 'FAQ — Gia Tattoo' },
  { path: 'aftercare', component: Aftercare, title: 'Aftercare — Gia Tattoo' },
  { path: 'contact',   component: Contact,   title: 'Contact — Gia Tattoo' },
  { path: '**',        redirectTo: '' },     // fallback: unknown URL → home
];