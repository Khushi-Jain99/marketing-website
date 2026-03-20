import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent implements OnChanges {
  @Input({ required: true }) product!: Product;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['product']) {
      console.debug('[ProductCard] input product:', this.product);
    }
  }

  get enquiryLink(): string {
    const productName = this.product?.name ?? 'your product';
    const text = `Hello, I want details for ${productName}.`;
    return `https://wa.me/919729421569?text=${encodeURIComponent(text)}`;
  }
}
