import { Routes } from '@angular/router';

import { HomeRoutes } from './home/home.routes';
import { PortfolioRoutes } from './portfolio/portfolio.routes';
import { DevelopmentRoutes } from './development/development.routes';
import { ContactRoutes } from './contact/contact.routes';

export const routes: Routes = [
  ...HomeRoutes,
  ...PortfolioRoutes,
  ...DevelopmentRoutes,
  ...ContactRoutes
];
