import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { ChartModule } from 'primeng/chart';
import {CardModule} from 'primeng/card';

import { AppRoutingModule } from './app-routing.module';
import { PaisesComponent } from './views/paises/paises.component';
import { PaisComponent } from './components/pais/pais.component';
import { EquipoComponent } from './views/equipo/equipo.component';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    PaisesComponent,
    PaisComponent,
    EquipoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartModule,
    CardModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
