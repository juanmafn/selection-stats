import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PaisesComponent } from "./views/paises/paises.component";
import { EquipoComponent } from "./views/equipo/equipo.component";

const routes: Routes = [
  { path: "", component: PaisesComponent },
  { path: "equipo/:pais", component: EquipoComponent, pathMatch: "full" }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: "enabled",
      useHash: true
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
