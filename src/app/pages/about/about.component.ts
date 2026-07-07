import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { fadeInUp, staggerCards } from '../../animations/section.animations';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  animations: [fadeInUp, staggerCards],
})
export class AboutComponent implements OnInit {
  highlights = [
    { label: 'Years of Experience', value: '18+' },
    { label: 'Projects Served', value: '2,500+' },
    { label: 'Product Variants', value: '400+' },
    { label: 'Trusted Partners', value: '150+' },
  ];

  timeline = [
    { year: '2006', title: 'Timber Supply Startup', text: 'Founded with a focus on carpentry wood, lumber logistics, and direct contractor relationships.' },
    { year: '2012', title: 'Modular Board Expansion', text: 'Integrated modern designer laminates, flush doors, and high-strength hinges into our catalog.' },
    { year: '2018', title: 'Industrial Core scale', text: 'Started serving local builders, architects, and corporate interior design firms in Panipat.' },
    { year: '2026', title: 'Next-Gen Inquiry Portal', text: 'Enabled detailed digital cataloging, transparent WhatsApp pricing, and bespoke project support.' },
  ];

  servedFor = ['Homeowners', 'Carpenters', 'Interior designers', 'Contractors', 'Retailers', 'Architects'];

  infrastructure = [
    {
      title: 'Dry Storage Warehouse',
      text: 'Our 15,000+ sq. ft. moisture-controlled facility keeps lumber and boards clean and structurally stable.',
      icon: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4'
    },
    {
      title: 'Panipat-Wide Logistics',
      text: 'Same-day delivery service via our dedicated loaders ensuring zero transit damages to veneer and sheets.',
      icon: 'M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10h10z M13 16h6l3-3V9a1 1 0 00-1-1h-8v8z'
    },
    {
      title: 'Precision Sizing Assist',
      text: 'On-site panel edge-banding and board cutting calculations to minimize waste for modular carpentry.',
      icon: 'M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z'
    }
  ];

  standards = [
    {
      title: '100% Gurjan Core Selection',
      desc: 'Selected premium hardwood layers bonded with phenolic resin to withstand water exposure.'
    },
    {
      title: 'E0 Safe Emission Class',
      desc: 'Low-formaldehyde glues ensure the indoor air quality in your modular kitchen is completely safe.'
    },
    {
      title: 'IS:710 Waterproofing',
      desc: 'Tested to survive 72 hours of continuous boiling water, matching global marine-grade specifications.'
    }
  ];

  constructor(private readonly seo: SeoService) {}

  ngOnInit(): void {
    this.seo.setPageMeta(
      'About Us | Vardhman Ply Palace',
      'Learn about our Panipat wood warehouse, premium quality standards, timeline journey, and logistical scale.',
    );
  }
}
