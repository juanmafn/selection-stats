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

    this.jugadores.forEach(jugador => {
      jugador.data = this.generateData(jugador);
    });
  }

  generateData(jugador) {
    const data: any = {};
    data.labels = [
      "Fuerza",
      "Velocidad",
      "Agilidad",
      "Agresividad",
      "Robo",
      "Regate",
      "Control silla",
      "Control bola"
    ];
    data.datasets = [];
    if (jugador.tstick) {
      data.datasets.push({
        label: "T-STICK",
        backgroundColor: "rgba(179,181,198,0.2)",
        borderColor: "rgba(179,181,198,1)",
        pointBackgroundColor: "rgba(179,181,198,1)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(179,181,198,1)",
        data: jugador.tstick
      });
    }
    if (jugador.manual != null) {
      data.datasets.push({
        label: "STICK MANUAL",
        backgroundColor: "rgba(255,99,132,0.2)",
        borderColor: "rgba(255,99,132,1)",
        pointBackgroundColor: "rgba(255,99,132,1)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(255,99,132,1)",
        data: jugador.manual
      });
    }
    return data;
  }
}
