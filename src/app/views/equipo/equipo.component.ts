import { Component, OnInit } from "@angular/core";
import { StatsService } from "src/app/core/services/stats.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-equipo",
  templateUrl: "./equipo.component.html",
  styleUrls: ["./equipo.component.css"]
})
export class EquipoComponent implements OnInit {
  jugadores: any[];
  options = {
    scale: {
      ticks: {
        max: 5,
        min: 0,
        stepSize: 0.5,
        beginAtZero: true
      }
    }
  };

  constructor(
    private readonly statsService: StatsService,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit() {
    const pais = this.route.snapshot.paramMap.get("pais");

    switch (pais) {
      case "España":
        this.jugadores = this.statsService.obtenerEspanya();
        break;
      case "Italia":
        this.jugadores = this.statsService.obtenerItalia();
        break;
      case "Alemania":
        this.jugadores = this.statsService.obtenerAlemania();
        break;
      case "Finlandia":
        this.jugadores = this.statsService.obtenerFinlandia();
        break;
    }
  }
}
