import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-why-choose-us',
  standalone: true, // Para trabajar como un componente independiente
  imports: [CommonModule], // Si necesitas algún módulo adicional, lo puedes agregar aquí
  templateUrl: './why-choose-us.component.html',
  styleUrls: ['./why-choose-us.component.css']
})
export class WhyChooseUsComponent {}
