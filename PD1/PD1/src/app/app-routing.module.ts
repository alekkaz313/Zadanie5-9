import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PasekComponent } from './pasek/pasek.component';
import { DodajComponent } from './dodaj/dodaj.component';
import { EdytujComponent } from './edytuj/edytuj.component';
import { SzczegolyComponent } from './szczegoly/szczegoly.component';
import { LogowanieComponent } from './logowanie/logowanie.component';
const routes: Routes = [
  {
    path: '',
    pathMatch:'full',
    component: LogowanieComponent,
    },
  {
    
    path: 'menu-glowne',
    component: PasekComponent,
  },
  {
    path: 'dodaj-gora',
    component: DodajComponent,
  },
  {
    path: 'zmien-gora/:id',
    component: EdytujComponent,
  },
  {
    path: 'opis/:id',
    component: SzczegolyComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
