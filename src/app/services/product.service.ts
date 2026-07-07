import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { Product, ProductCategory } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  readonly categories: ProductCategory[] = ['Plywood', 'Laminates', 'Boards', 'Hardware'];

  constructor(private readonly http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('data/products.json').pipe(
      map((products) => (Array.isArray(products) ? products : [])),
      tap((products) => console.debug('[ProductService] loaded products:', products.length)),
      catchError((error) => {
        console.error('[ProductService] failed to load products:', error);
        return of([]);
      }),
    );
  }

  getFeaturedProducts(): Observable<Product[]> {
    return this.getProducts().pipe(map((products) => products.slice(0, 8)));
  }
}
