import { Component, Input } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss',
})
export class ProductCard {
  @Input({ required: true }) product!: Product;

  get enquiryLink(): string {
    const text = `Hello, I want details for ${this.product.name}.`;
    return `https://wa.me/919876543210?text=${encodeURIComponent(text)}`;
  }
}
