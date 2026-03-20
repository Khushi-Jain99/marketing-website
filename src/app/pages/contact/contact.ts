import { Component, OnInit } from '@angular/core';
import { ContactForm } from '../../components/contact-form/contact-form';
import { fadeInUp } from '../../animations/section.animations';
import { SeoService } from '../../services/seo';

@Component({
  selector: 'app-contact',
  imports: [ContactForm],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
  animations: [fadeInUp],
})
export class Contact implements OnInit {
  constructor(private readonly seo: SeoService) {}

  contactPoints = [
    { label: 'Phone', value: '+91 98765 43210', href: 'tel:+919876543210' },
    { label: 'WhatsApp', value: 'Chat instantly for quotes', href: 'https://wa.me/919876543210?text=Hello%2C%20I%20need%20a%20quotation.' },
    { label: 'Email', value: 'vardhman@example.com', href: 'mailto:vardhman@example.com' },
    { label: 'Store hours', value: 'Mon-Sat, 9:00 AM to 8:00 PM', href: null },
  ];

  enquiryTips = [
    'Share the product category you need.',
    'Mention approximate quantity or project size.',
    'Tell us your preferred finish or grade.',
    'Include your location for delivery guidance.',
  ];

  ngOnInit(): void {
    this.seo.setPageMeta(
      'Contact | Vardhman Ply Palace',
      'Contact us for plywood, laminate, board, and hardware inquiries. Call or WhatsApp now.',
    );
  }
}
