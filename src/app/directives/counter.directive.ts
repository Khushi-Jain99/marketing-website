import { Directive, ElementRef, Renderer2, OnInit, OnDestroy, Input } from '@angular/core';

@Directive({
  selector: '[appCounter]',
  standalone: true
})
export class CounterDirective implements OnInit, OnDestroy {
  @Input() targetNumber = 0;
  @Input() suffix = '';
  @Input() duration = 1600; // transition duration in milliseconds

  private observer: IntersectionObserver | null = null;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.animateCount();
          this.observer?.unobserve(this.el.nativeElement);
        }
      });
    }, {
      threshold: 0.1
    });

    this.observer.observe(this.el.nativeElement);
  }

  private animateCount() {
    const start = 0;
    const end = this.targetNumber;
    if (start === end) {
      this.renderer.setProperty(this.el.nativeElement, 'innerText', `${end}${this.suffix}`);
      return;
    }

    const startTime = performance.now();

    const updateCount = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / this.duration, 1);
      
      // Smooth easeOutQuad progress
      const easeProgress = progress * (2 - progress);
      const currentVal = Math.floor(easeProgress * (end - start) + start);

      this.renderer.setProperty(this.el.nativeElement, 'innerText', `${currentVal}${this.suffix}`);

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      } else {
        this.renderer.setProperty(this.el.nativeElement, 'innerText', `${end}${this.suffix}`);
      }
    };

    requestAnimationFrame(updateCount);
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
