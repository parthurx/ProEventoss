import { Routes } from '@angular/router';
import { PalestrantesComponent } from './palestrantes/palestrantes.component';
import { EventosComponent } from './eventos/eventos.component';
export const routes: Routes = [
    {path: 'test', component: PalestrantesComponent},
    {path: '', component: EventosComponent}
];
