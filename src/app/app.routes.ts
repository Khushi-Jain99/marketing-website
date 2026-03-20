import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		loadComponent: () => import('./pages/home/home').then((m) => m.Home),
		title: 'Home | Vardhman Ply Palace',
	},
	{
		path: 'products',
		loadComponent: () => import('./pages/products/products').then((m) => m.Products),
		title: 'Products | Vardhman Ply Palace',
	},
	{
		path: 'about',
		loadComponent: () => import('./pages/about/about').then((m) => m.About),
		title: 'About Us | Vardhman Ply Palace',
	},
	{
		path: 'contact',
		loadComponent: () => import('./pages/contact/contact').then((m) => m.Contact),
		title: 'Contact | Vardhman Ply Palace',
	},
	{
		path: '**',
		redirectTo: '',
	},
];
