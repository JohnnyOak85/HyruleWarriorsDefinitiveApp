import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { ChallengeComponent } from './components/challenge/challenge.component';
import { CreditsComponent } from './components/credits/credits.component';
import { LegendsComponent } from './components/legend/legend.component';
import { MapComponent } from './components/map/map.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: localStorage.getItem('path') || 'legend-mode',
    pathMatch: 'full',
  },
  {
    path: 'credits',
    component: CreditsComponent,
  },
  {
    path: 'challenge-mode',
    component: ChallengeComponent,
  },
  {
    path: 'legend-mode',
    component: LegendsComponent,
  },
  {
    path: 'map/:id',
    component: MapComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
