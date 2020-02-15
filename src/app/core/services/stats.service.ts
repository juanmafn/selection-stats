import { Injectable } from "@angular/core";
import { Utils } from "src/app/common/utils";

@Injectable()
export class StatsService {
  constructor() {}

  obtenerEspanya() {
    const jugadores = [
      {
        nombre: "Jugador 1",
        dorsal: 0,
        manual: {
          fuerza: 4.5,
          tiro: 4.5,
          alcance: 0,
          regate: 4.5,
          controlSilla: 4,
          controlBola: 4.5,
          tactica: 4
        },
        comentarios: "esto es un comentario de prueba"
      }
    ];

    const jugadoresProcesados = [];
    jugadores.forEach(jugador => {
      jugadoresProcesados.push(Utils.generateData(jugador));
    });

    return jugadoresProcesados;
  }

  obtenerItalia() {
    const jugadores = [
      {
        nombre: "Comino",
        dorsal: 4,
        manual: {
          fuerza: 4.5,
          tiro: 4.5,
          alcance: 0,
          regate: 4.5,
          controlSilla: 4,
          controlBola: 4.5,
          tactica: 4
        },
        comentarios: "Sólo lleva él bola"
      },
      {
        nombre: "Mulattore",
        dorsal: 9,
        manual: {
          fuerza: 4.5,
          tiro: 4.5,
          alcance: 0,
          regate: 4.5,
          controlSilla: 4.5,
          controlBola: 4.5,
          tactica: 4.5
        },
        comentarios: "Lleva él bola pero a veces se enreda"
      },
      {
        nombre: "",
        dorsal: 11,
        manual: {
          fuerza: 2,
          tiro: 3,
          alcance: 0,
          regate: 3.5,
          controlSilla: 4,
          controlBola: 3.5,
          tactica: 4
        },
        comentarios: "Juega mucho a bloquear como sus compañeros t-sticks"
      },
      {
        nombre: "",
        dorsal: 18,
        manual: {
          fuerza: 4,
          tiro: 3.5,
          alcance: 0,
          regate: 3.5,
          controlSilla: 3.5,
          controlBola: 4,
          tactica: 3.5
        },
        comentarios: "Puede llevar bola sin problemás, presiona y se abre"
      },
      {
        nombre: "",
        dorsal: 21,
        tstick: {
          regate: 0,
          controlSilla: 3.5,
          controlBola: 2,
          tactica: 3.5
        },
        comentarios: "Es molesto en defensa, está encima de su rival"
      },
      {
        nombre: "",
        dorsal: 25,
        portero: {
          movimiento: 4,
          controlSilla: 3.5,
          tactica: 4
        },
        comentarios: "Sale a bloquear cuando hay presión rival cerca"
      }
    ];

    const jugadoresProcesados = [];
    jugadores.forEach(jugador => {
      jugadoresProcesados.push(Utils.generateData(jugador));
    });

    return jugadoresProcesados;
  }

  obtenerAlemania() {
    const jugadores = [
      {
        nombre: "Jugador 1",
        dorsal: 0,
        manual: {
          fuerza: 4.5,
          tiro: 4.5,
          alcance: 0,
          regate: 4.5,
          controlSilla: 4,
          controlBola: 4.5,
          tactica: 4
        },
        comentarios: "esto es un comentario de prueba"
      }
    ];

    const jugadoresProcesados = [];
    jugadores.forEach(jugador => {
      jugadoresProcesados.push(Utils.generateData(jugador));
    });

    return jugadoresProcesados;
  }

  obtenerFinlandia() {
    const jugadores = [
      {
        nombre: "Jugador 1",
        dorsal: 0,
        manual: {
          fuerza: 4.5,
          tiro: 4.5,
          alcance: 0,
          regate: 4.5,
          controlSilla: 4,
          controlBola: 4.5,
          tactica: 4
        },
        comentarios: "esto es un comentario de prueba"
      }
    ];

    const jugadoresProcesados = [];
    jugadores.forEach(jugador => {
      jugadoresProcesados.push(Utils.generateData(jugador));
    });

    return jugadoresProcesados;
  }
}
