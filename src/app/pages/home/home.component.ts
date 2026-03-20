import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { TestimonialsComponent } from '../../components/testimonials/testimonials.component';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';
import { fadeInUp, staggerCards } from '../../animations/section.animations';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-home',
  imports: [CommonModule, HeroComponent, ProductCardComponent, TestimonialsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  animations: [fadeInUp, staggerCards],
})
export class HomeComponent implements OnInit {
  featuredProducts: Product[] = [];

  whyChoose = [
    {
      title: 'Premium Quality',
      icon: 'verified',
      text: 'We stock durable, tested materials from reliable brands for long-lasting interiors.',
    },
    {
      title: 'Wide Range',
      icon: 'category',
      text: 'From plywood and laminates to boards and hardware, everything is available in one place.',
    },
    {
      title: 'Affordable Pricing',
      icon: 'savings',
      text: 'Get transparent pricing with practical options for both retail and bulk project needs.',
    },
    {
      title: 'Expert Guidance',
      icon: 'support_agent',
      text: 'Our team helps you choose the right grade, finish, and fittings for your use case.',
    },
    {
      title: 'Fast Delivery',
      icon: 'local_shipping',
      text: 'Quick dispatch and dependable logistics help keep your interior work on schedule.',
    },
    {
      title: 'Trusted Customers',
      icon: 'groups',
      text: 'Preferred by homeowners, carpenters, and designers for consistent quality and service.',
    },
  ];

  stats = [
    { label: 'Years in Business', value: '18+', note: 'Serving with consistency and trust.' },
    { label: 'Projects Supplied', value: '2,500+', note: 'Homes, offices, and retail spaces.' },
    { label: 'Product Variants', value: '400+', note: 'Grades, finishes, and hardware options.' },
    { label: 'Bulk Clients', value: '150+', note: 'Contractors and interior teams served.' },
  ];

  serviceCards = [
    {
      title: 'Plywood for every grade',
      text: 'BWR, marine, commercial, and decorative boards matched to practical use cases.',
    },
    {
      title: 'Laminates and finishes',
      text: 'Matte, glossy, texture, and premium decorative options for stylish interiors.',
    },
    {
      title: 'Boards and core materials',
      text: 'MDF, particle board, block board, and edge-support solutions for custom furniture.',
    },
    {
      title: 'Hardware and fittings',
      text: 'Hinges, channels, handles, and accessories that complete the build with confidence.',
    },
  ];

  workSteps = [
    {
      step: '01',
      title: 'Tell us your requirement',
      text: 'Share the room, use case, and preferred finish so we can suggest the right range.',
    },
    {
      step: '02',
      title: 'Get product guidance',
      text: 'We recommend the best grades and finishes based on durability, budget, and aesthetics.',
    },
    {
      step: '03',
      title: 'Approve the quotation',
      text: 'Receive a clear, practical quotation with product options and availability.',
    },
    {
      step: '04',
      title: 'Receive on-time delivery',
      text: 'We support smooth order fulfillment for renovation, retail, and new build projects.',
    },
  ];

  serviceAreas = [
    'Residential interiors',
    'Modular kitchens',
    'Wardrobes and cabinets',
    'Office partitions',
    'Retail fit-outs',
    'Contractor bulk supply',
  ];

  constructor(
    private readonly productService: ProductService,
    private readonly seo: SeoService,
  ) {}

  ngOnInit(): void {
    this.seo.setPageMeta(
      'Home | Vardhman Ply Palace',
      'Trusted supplier of plywood, laminates, boards, and hardware for homes and commercial projects.',
    );

    this.productService.getFeaturedProducts().subscribe((products) => {
      console.debug('[Home] featured products loaded:', products);
      this.featuredProducts = products;
    });
  }
}
