import { Routes } from '@angular/router';
import { HeroComponent } from './hero/hero.component';
import { WhyChooseUsComponent } from './why-choose-us/why-choose-us.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { SafetyComponent } from './safety/safety.component'; // Importamos el componente

export const routes: Routes = [
  { path: '', component: HeroComponent },
  { path: 'why-choose-us', component: WhyChooseUsComponent },
  { path: 'how-it-works', component: HowItWorksComponent },
  { path: 'testimonials', component: TestimonialsComponent },
  { path: 'safety', component: SafetyComponent }, // Ruta para SafetyComponent

  { path: '**', redirectTo: '' }
];
