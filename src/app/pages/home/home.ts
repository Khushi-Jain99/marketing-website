import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Hero } from '../../components/hero/hero';
import { ProductCard } from '../../components/product-card/product-card';
import { Testimonials } from '../../components/testimonials/testimonials';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product';
import { fadeInUp, staggerCards } from '../../animations/section.animations';
import { SeoService } from '../../services/seo';

@Component({
  selector: 'app-home',
  imports: [CommonModule, Hero, ProductCard, Testimonials],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  animations: [fadeInUp, staggerCards],
})
export class Home implements OnInit {
  featuredProducts: Product[] = [];

  whyChoose = [
    {
      title: 'Quality Assured Materials',
      text: 'Every sheet and hardware item is sourced from trusted brands with strict quality checks.',
    },
    {
      title: 'Competitive Pricing',
      text: 'Transparent rates for retail and bulk orders with value-packed recommendations.',
    },
    {
      title: 'Expert Guidance',
      text: 'Get practical recommendations for plywood grade, laminate finish, and fittings.',
    },
    {
      title: 'Reliable Delivery',
      text: 'On-time dispatch for ongoing projects with consistent stock availability.',
    },
    {
      title: 'Bulk Order Support',
      text: 'Special assistance for builders, contractors, and interior teams handling larger projects.',
    },
    {
      title: 'After-Sales Guidance',
      text: 'Need help after purchase? We stay available with practical product and installation support.',
    },
  ];

  stats = [
    { label: 'Years in Business', value: '18+' },
    { label: 'Projects Supplied', value: '2,500+' },
    { label: 'Product Variants', value: '400+' },
    { label: 'Bulk Clients', value: '150+' },
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
      this.featuredProducts = products;
    });
  }
}
