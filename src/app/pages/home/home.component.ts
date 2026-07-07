import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { TestimonialsComponent } from '../../components/testimonials/testimonials.component';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';
import { fadeInUp, staggerCards } from '../../animations/section.animations';
import { SeoService } from '../../services/seo.service';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';
import { CounterDirective } from '../../directives/counter.directive';

@Component({
  selector: 'app-home',
  imports: [CommonModule, HeroComponent, ProductCardComponent, TestimonialsComponent, ScrollRevealDirective, CounterDirective],
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
    { label: 'Years in Business', value: '18+', numericValue: 18, suffix: '+', note: 'Serving with consistency and trust.' },
    { label: 'Projects Supplied', value: '2,500+', numericValue: 2500, suffix: '+', note: 'Homes, offices, and retail spaces.' },
    { label: 'Product Variants', value: '400+', numericValue: 400, suffix: '+', note: 'Grades, finishes, and hardware options.' },
    { label: 'Bulk Clients', value: '150+', numericValue: 150, suffix: '+', note: 'Contractors and interior teams served.' },
  ];

  serviceCards = [
    {
      title: 'Plywood for every grade',
      text: 'BWR, marine, commercial, and decorative boards matched to practical use cases.',
      image: 'data:image/jpeg;base64,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',
    },
    {
      title: 'Laminates and finishes',
      text: 'Matte, glossy, texture, and premium decorative options for stylish interiors.',
      image: 'https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&w=1200&q=80',
    },
    {
      title: 'Boards and core materials',
      text: 'MDF, particle board, block board, and edge-support solutions for custom furniture.',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Hardware and fittings',
      text: 'Hinges, channels, handles, and accessories that complete the build with confidence.',
      image: 'https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?auto=format&fit=crop&w=800&q=80',
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
  ) { }

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
