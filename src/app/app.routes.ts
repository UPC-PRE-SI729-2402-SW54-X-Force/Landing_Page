import { Routes } from '@angular/router';
import { HeroComponent } from './hero/hero.component';
import { WhyChooseUsComponent } from './why-choose-us/why-choose-us.component'; // Importamos el nuevo componente

export const routes: Routes = [
  { path: '', component: HeroComponent }, // Ruta para HeroComponent en la raíz
  { path: 'why-choose-us', component: WhyChooseUsComponent }, // Ruta para WhyChooseUsComponent

  { path: '**', redirectTo: '' }
];
