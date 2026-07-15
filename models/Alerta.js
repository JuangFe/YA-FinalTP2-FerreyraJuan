class Alerta {
  constructor({ idSensor, mensaje, valor, timestamp }) {

    if (!idSensor || typeof idSensor !== "string") {
      throw new Error("idSensor debe ser un string válido");
    }

    if (!mensaje || typeof mensaje !== "string") {
      throw new Error("El mensaje debe ser un string válido");
    }

    if (typeof valor !== "number" || Number.isNaN(valor)) {
      throw new Error("El valor debe ser numérico");
    }

    if (!timestamp || typeof timestamp !== "string") {
      throw new Error("El timestamp debe ser un string válido");
    }

    this.idSensor = idSensor;
    this.mensaje = mensaje;
    this.valor = valor;
    this.timestamp = timestamp;
  }
}

export default Alerta;