import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { routes } from './app.routes';
import { EventosComponent } from './eventos/eventos.component';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { CollapseModule } from 'ngx-bootstrap/collapse';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    provideAnimations(),
    BrowserAnimationsModule,
    importProvidersFrom(CollapseModule.forRoot()),
  ],
};
