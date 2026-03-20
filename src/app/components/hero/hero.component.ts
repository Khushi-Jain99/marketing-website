import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero',
  imports: [RouterLink],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  @Input() heading = 'Trusted Plywood and Hardware Partner';
  @Input() subheading = 'Strong materials. Honest pricing. On-time delivery.';
}
