import { Routes } from '@angular/router';
import { HeroComponent } from './hero/hero.component';
import { WhyChooseUsComponent } from './why-choose-us/why-choose-us.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component'; // Importamos el nuevo componente

export const routes: Routes = [
  { path: '', component: HeroComponent }, // Ruta para HeroComponent en la raíz
  { path: 'why-choose-us', component: WhyChooseUsComponent }, // Ruta para WhyChooseUsComponent
  { path: 'how-it-works', component: HowItWorksComponent }, // Ruta para HowItWorksComponent

  { path: '**', redirectTo: '' } // Redireccionar cualquier ruta no encontrada a la raíz
];
