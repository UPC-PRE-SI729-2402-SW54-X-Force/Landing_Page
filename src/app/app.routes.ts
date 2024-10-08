import { Routes } from '@angular/router';
import { HeroComponent } from './hero/hero.component';
import { WhyChooseUsComponent } from './why-choose-us/why-choose-us.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { SafetyComponent } from './safety/safety.component';
import { PremiumPlansComponent } from './premium-plans/premium-plans.component';
import { TeamComponent } from './team/team.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component'; // Importa el componente de footer

export const routes: Routes = [
  { path: '', component: HeroComponent },
  { path: 'why-choose-us', component: WhyChooseUsComponent },
  { path: 'how-it-works', component: HowItWorksComponent },
  { path: 'testimonials', component: TestimonialsComponent },
  { path: 'safety', component: SafetyComponent },
  { path: 'premium-plans', component: PremiumPlansComponent },
  { path: 'team', component: TeamComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'footer', component: FooterComponent },
  { path: '**', redirectTo: '' }
];
