import { Directive, ElementRef, Renderer2, OnInit, OnDestroy, Input } from '@angular/core';

@Directive({
  selector: '[appScrollReveal]',
  standalone: true
})
export class ScrollRevealDirective implements OnInit, OnDestroy {
  @Input() revealClass = 'reveal-visible';
  @Input() delay = 0; // delay in milliseconds

  private observer: IntersectionObserver | null = null;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.renderer.addClass(this.el.nativeElement, 'reveal-init');

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            this.renderer.addClass(this.el.nativeElement, this.revealClass);
          }, this.delay);
          // Stop observing once animated
          this.observer?.unobserve(this.el.nativeElement);
        }
      });
    }, {
      threshold: 0.05,
      rootMargin: '0px 0px -50px 0px' // triggers slightly before fully entering
    });

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
