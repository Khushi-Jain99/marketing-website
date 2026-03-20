import { Component, OnDestroy, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  imports: [],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.scss',
})
export class Testimonials implements OnInit, OnDestroy {
  private timerId?: ReturnType<typeof setInterval>;
  current = signal(0);

  testimonials = [
    { name: 'Rajesh Patel', text: 'Excellent quality plywood and very professional guidance. Highly recommended.' },
    { name: 'Minal Shah', text: 'Great variety of laminates. Delivery was fast and prices were fair.' },
    { name: 'Aarav Interiors', text: 'Our go-to supplier for hardware and boards for modular projects.' },
    { name: 'Karan Developers', text: 'They helped us choose the right product grades for multiple site requirements.' },
    { name: 'Nisha Kitchens', text: 'Very helpful for bulk orders and on-time support for kitchen installations.' },
  ];

  ngOnInit(): void {
    this.timerId = setInterval(() => this.next(), 3500);
  }

  ngOnDestroy(): void {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  next(): void {
    this.current.update((index) => (index + 1) % this.testimonials.length);
  }

  previous(): void {
    this.current.update((index) => (index - 1 + this.testimonials.length) % this.testimonials.length);
  }
}
