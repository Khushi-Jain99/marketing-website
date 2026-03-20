import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { Footer } from './components/footer/footer';
import { WhatsappFloat } from './components/whatsapp-float/whatsapp-float';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer, WhatsappFloat],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {}
