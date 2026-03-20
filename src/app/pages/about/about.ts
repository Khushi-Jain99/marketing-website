import { Component, OnInit } from '@angular/core';
import { fadeInUp, staggerCards } from '../../animations/section.animations';
import { SeoService } from '../../services/seo';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.scss',
  animations: [fadeInUp, staggerCards],
})
export class About implements OnInit {
  highlights = [
    { label: 'Years of Experience', value: '18+' },
    { label: 'Projects Served', value: '2,500+' },
    { label: 'Product Variants', value: '400+' },
    { label: 'Trusted Partners', value: '150+' },
  ];

  timeline = [
    { year: '2006', title: 'Started as a local timber supplier', text: 'Built on reliability, workmanship, and practical advice for customers.' },
    { year: '2012', title: 'Expanded product categories', text: 'Added laminates, boards, and advanced hardware ranges.' },
    { year: '2018', title: 'Bulk project supply', text: 'Started supporting contractors, architects, and interior firms at scale.' },
    { year: '2026', title: 'Premium omnichannel inquiry experience', text: 'Focused on fast responses, clearer product choices, and seamless follow-up.' },
  ];

  servedFor = ['Homeowners', 'Carpenters', 'Interior designers', 'Contractors', 'Retailers', 'Architects'];

  constructor(private readonly seo: SeoService) {}

  ngOnInit(): void {
    this.seo.setPageMeta(
      'About Us | Vardhman Ply Palace',
      'Learn about our experience, mission, and commitment to quality building materials.',
    );
  }
}
