import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		loadComponent: () => import('./pages/home/home.component').then((m) => m.HomeComponent),
		title: 'Home | Vardhman Ply Palace',
	},
	{
		path: 'products',
		loadComponent: () => import('./pages/products/products.component').then((m) => m.ProductsComponent),
		title: 'Products | Vardhman Ply Palace',
	},
	{
		path: 'about',
		loadComponent: () => import('./pages/about/about.component').then((m) => m.AboutComponent),
		title: 'About Us | Vardhman Ply Palace',
	},
	{
		path: 'contact',
		loadComponent: () => import('./pages/contact/contact.component').then((m) => m.ContactComponent),
		title: 'Contact | Vardhman Ply Palace',
	},
	{
		path: '**',
		redirectTo: '',
	},
];
