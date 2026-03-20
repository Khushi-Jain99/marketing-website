import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ProductCard } from '../../components/product-card/product-card';
import { Product, ProductCategory } from '../../models/product.model';
import { ProductService } from '../../services/product';
import { fadeInUp, staggerCards } from '../../animations/section.animations';
import { SeoService } from '../../services/seo';

@Component({
  selector: 'app-products',
  imports: [CommonModule, FormsModule, ProductCard, RouterLink],
  templateUrl: './products.html',
  styleUrl: './products.scss',
  animations: [fadeInUp, staggerCards],
})
export class Products implements OnInit {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  search = '';
  activeCategory: ProductCategory | 'All' = 'All';
  categories: Array<ProductCategory | 'All'> = ['All'];
  categoryHighlights = [
    {
      title: 'Plywood',
      text: 'Moisture-resistant and commercial grades for furniture, cabinetry, and site work.',
    },
    {
      title: 'Laminates',
      text: 'Decorative surfaces in rich textures and finishes for premium visual appeal.',
    },
    {
      title: 'Boards',
      text: 'Engineered boards for stable, consistent, and cost-effective furniture builds.',
    },
    {
      title: 'Hardware',
      text: 'Precision fittings and accessories that improve durability and usability.',
    },
  ];

  constructor(
    private readonly productService: ProductService,
    private readonly seo: SeoService,
  ) {}

  ngOnInit(): void {
    this.seo.setPageMeta(
      'Products | Vardhman Ply Palace',
      'Explore plywood, laminates, boards, and hardware with quick enquiry options.',
    );

    this.categories = ['All', ...this.productService.categories];
    this.productService.getProducts().subscribe((products) => {
      this.products = products;
      this.applyFilters();
    });
  }

  get resultCount(): number {
    return this.filteredProducts.length;
  }

  setCategory(category: ProductCategory | 'All'): void {
    this.activeCategory = category;
    this.applyFilters();
  }

  applyFilters(): void {
    const query = this.search.trim().toLowerCase();

    this.filteredProducts = this.products.filter((product) => {
      const categoryMatch = this.activeCategory === 'All' || product.category === this.activeCategory;
      const searchMatch =
        !query ||
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query);

      return categoryMatch && searchMatch;
    });
  }
}
