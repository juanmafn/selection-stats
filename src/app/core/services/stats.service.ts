import { Injectable } from "@angular/core";

@Injectable()
export class StatsService {
  constructor() {}

  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  generateVectorRandom(size) {
    const v = [];
    for (let i = 0; i < size; i++) {
      v.push(this.getRandomInt(0.5, 5));
    }
    return v;
  }

  obtenerEspanya() {
    const jugadores = [
      {
        nombre: "jugador 1",
        tstick: this.generateVectorRandom(8),
        manual: this.generateVectorRandom(8)
      },
      {
        nombre: "jugador 2",
        manual: this.generateVectorRandom(8)
      },
      {
        nombre: "jugador 3",
        tstick: this.generateVectorRandom(8)
      }
    ];

    return jugadores;
  }

  obtenerItalia() {
    const jugadores = [
        {
          nombre: "jugador 1",
          tstick: this.generateVectorRandom(8),
          manual: this.generateVectorRandom(8)
        },
        {
          nombre: "jugador 2",
          manual: this.generateVectorRandom(8)
        },
        {
          nombre: "jugador 3",
          tstick: this.generateVectorRandom(8)
        }
      ];
  
      return jugadores;
  }

  obtenerAlemania() {
    const jugadores = [
        {
          nombre: "jugador 1",
          tstick: this.generateVectorRandom(8),
          manual: this.generateVectorRandom(8)
        },
        {
          nombre: "jugador 2",
          manual: this.generateVectorRandom(8)
        },
        {
          nombre: "jugador 3",
          tstick: this.generateVectorRandom(8)
        }
      ];
  
      return jugadores;
  }

  obtenerFinlandia() {
    const jugadores = [
        {
          nombre: "jugador 1",
          tstick: this.generateVectorRandom(8),
          manual: this.generateVectorRandom(8)
        },
        {
          nombre: "jugador 2",
          manual: this.generateVectorRandom(8)
        },
        {
          nombre: "jugador 3",
          tstick: this.generateVectorRandom(8)
        }
      ];
  
      return jugadores;
  }
}
