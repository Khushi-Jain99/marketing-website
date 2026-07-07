import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ContactFormComponent } from '../../components/contact-form/contact-form.component';
import { fadeInUp } from '../../animations/section.animations';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, ContactFormComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  animations: [fadeInUp],
})
export class ContactComponent implements OnInit {
  constructor(private readonly seo: SeoService) { }

  contactPoints = [
    { label: 'Phone', value: '+91 97294 xxxxx', href: 'tel:+9197294xxxxx' },
    { label: 'WhatsApp', value: 'Chat instantly for quotes', href: 'https://wa.me/9197294xxxxx?text=Hello%2C%20I%20need%20a%20quotation.' },
    { label: 'Email', value: 'vardhman@example.com', href: 'mailto:vardhman@example.com' },
    { label: 'Store hours', value: 'Mon-Sat: 9:00 AM - 8:00 PM, Sun: 9:00 AM - 3:00 PM.', href: null },
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
