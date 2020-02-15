export class Utils {
  public static generateData(jugador) {
    const data: any = {};
    let dataValuesManual: number[];
    let dataValuesTstick: number[];
    let dataValuesPortero: number[];

    data.jugador = {
      nombre: jugador.nombre,
      dorsal: jugador.dorsal,
      comentarios: jugador.comentarios
    };

    data.labels = [];
    if (jugador.manual && !jugador.tstick && !jugador.portero) {
      data.labels = [
        "Fuerza",
        "Tiro",
        "Puntería",
        "Pase",
        "Alcance",
        "Regate",
        "Control silla",
        "control bola",
        "Táctica"
      ];

      dataValuesManual = [
        jugador.manual.fuerza,
        jugador.manual.tipo,
        jugador.manual.punteria,
        jugador.manual.pase,
        jugador.manual.alcance,
        jugador.manual.regate,
        jugador.manual.controlSilla,
        jugador.manual.controlBola,
        jugador.manual.tactica
      ];

      dataValuesTstick = [];
      dataValuesPortero = [];
    } else if (!jugador.manual && jugador.tstick && !jugador.portero) {
      data.labels = ["Regate", "Control silla", "control bola", "Táctica"];
      dataValuesManual = [];
      dataValuesTstick = [
        jugador.tstick.regate,
        jugador.tstick.controlSilla,
        jugador.tstick.controlBola,
        jugador.tstick.tactica
      ];
      dataValuesPortero = [];
    } else if (!jugador.manual && !jugador.tstick && jugador.portero) {
      data.labels = ["Movimiento", "Control silla", "control bola", "Táctica"];
      dataValuesManual = [];
      dataValuesTstick = [];
      dataValuesPortero = [
        jugador.portero.movimiento,
        jugador.portero.controlSilla,
        jugador.portero.controlBola,
        jugador.portero.tactica
      ];
    } else if (jugador.manual && jugador.tstick && !jugador.portero) {
      data.labels = [
        "Fuerza",
        "Tiro",
        "Puntería",
        "Pase",
        "Alcance",
        "Regate",
        "Control silla",
        "control bola",
        "Táctica"
      ];
      dataValuesManual = [
        jugador.manual.fuerza,
        jugador.manual.tipo,
        jugador.manual.punteria,
        jugador.manual.pase,
        jugador.manual.alcance,
        jugador.manual.regate,
        jugador.manual.controlSilla,
        jugador.manual.controlBola,
        jugador.manual.tactica
      ];
      dataValuesTstick = [
        jugador.tstick.regate,
        jugador.tstick.controlSilla,
        jugador.tstick.controlBola,
        jugador.tstick.tactica
      ];
      dataValuesPortero = [];
    } else if (jugador.manual && !jugador.tstick && jugador.portero) {
      data.labels = [
        "Movimiento",
        "Fuerza",
        "Tiro",
        "Puntería",
        "Pase",
        "Alcance",
        "Regate",
        "Control silla",
        "control bola",
        "Táctica"
      ];
      dataValuesManual = [
        jugador.manual.fuerza,
        jugador.manual.tipo,
        jugador.manual.punteria,
        jugador.manual.pase,
        jugador.manual.alcance,
        jugador.manual.regate,
        jugador.manual.controlSilla,
        jugador.manual.controlBola,
        jugador.manual.tactica
      ];
      dataValuesTstick = [];
      dataValuesPortero = [
        jugador.portero.movimiento,
        jugador.portero.controlSilla,
        jugador.portero.controlBola,
        jugador.portero.tactica
      ];
    } else if (!jugador.manual && jugador.tstick && jugador.portero) {
      data.labels = [
        "Movimiento",
        "Regate",
        "Control silla",
        "control bola",
        "Táctica"
      ];
      dataValuesManual = [];
      dataValuesTstick = [
        jugador.tstick.regate,
        jugador.tstick.controlSilla,
        jugador.tstick.controlBola,
        jugador.tstick.tactica
      ];
      dataValuesPortero = [
        jugador.portero.movimiento,
        jugador.portero.controlSilla,
        jugador.portero.controlBola,
        jugador.portero.tactica
      ];
    } else if (jugador.manual && jugador.tstick && jugador.portero) {
      data.labels = [
        "Movimiento",
        "Fuerza",
        "Tiro",
        "Puntería",
        "Pase",
        "Alcance",
        "Regate",
        "Control silla",
        "control bola",
        "Táctica"
      ];
      dataValuesManual = [
        jugador.manual.fuerza,
        jugador.manual.tipo,
        jugador.manual.punteria,
        jugador.manual.pase,
        jugador.manual.alcance,
        jugador.manual.regate,
        jugador.manual.controlSilla,
        jugador.manual.controlBola,
        jugador.manual.tactica
      ];
      dataValuesTstick = [
        jugador.tstick.regate,
        jugador.tstick.controlSilla,
        jugador.tstick.controlBola,
        jugador.tstick.tactica
      ];
      dataValuesPortero = [
        jugador.portero.movimiento,
        jugador.portero.controlSilla,
        jugador.portero.controlBola,
        jugador.portero.tactica
      ];
    }

    data.datasets = [];
    if (jugador.manual) {
      data.datasets.push({
        label: "H-Stick",
        backgroundColor: "rgba(255,99,132,0.2)",
        borderColor: "rgba(255,99,132,1)",
        pointBackgroundColor: "rgba(255,99,132,1)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(255,99,132,1)",
        data: dataValuesManual
      });
    }
    if (jugador.tstick) {
      data.datasets.push({
        label: "T-Stick",
        backgroundColor: "rgba(179,181,198,0.2)",
        borderColor: "rgba(179,181,198,1)",
        pointBackgroundColor: "rgba(179,181,198,1)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(179,181,198,1)",
        data: dataValuesTstick
      });
    }
    if (jugador.portero) {
      data.datasets.push({
        label: "Portero",
        backgroundColor: "rgba(179,181,198,0.2)",
        borderColor: "rgba(179,181,198,1)",
        pointBackgroundColor: "rgba(179,181,198,1)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(179,181,198,1)",
        data: dataValuesPortero
      });
    }
    return data;
  }
}
