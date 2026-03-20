import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Product, ProductCategory } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  readonly categories: ProductCategory[] = ['Plywood', 'Laminates', 'Boards', 'Hardware'];

  constructor(private readonly http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('data/products.json');
  }

  getFeaturedProducts(): Observable<Product[]> {
    return this.getProducts().pipe(map((products) => products.slice(0, 6)));
  }
}
