class LecturasService {
  constructor(lecturasDAO, sensoresDAO, alertasDAO) {
    this.lecturasDAO = lecturasDAO;
    this.sensoresDAO = sensoresDAO;
    this.alertasDAO = alertasDAO;
  }
  procesarLectura(data) {
    const { id, valor, timestamp } = data;
    if (!id || typeof id !== "string") {
      throw new Error("El id del sensor es obligatorio");
    }
    const sensor = this.sensoresDAO.sensores.get(id);
    if (!sensor) {
      throw new Error("El sensor no existe");
    }

    sensor.valor = valor;
    sensor.timestamp = timestamp;
    this.lecturasDAO.guardarLectura(data);

    const alerta = this.generarAlerta(sensor);
    if (alerta) {
      this.alertasDAO.guardarAlerta(alerta);
    }
    return {
      sensorActualizado: sensor,
      alertaGenerada: alerta || null,
    };
  }
  generarAlerta(sensor) {
    const { tipo, valor } = sensor;
    if (tipo === "TEMPERATURA" && valor > 50) {
      return {
        idSensor: sensor.id,
        mensaje: "Temperatura excedida",
        valor,
        timestamp: sensor.timestamp,
      };
    }
    if (tipo === "HUMEDAD" && valor < 20) {
      return {
        idSensor: sensor.id,
        mensaje: "Humedad demasiado baja",
        valor,
        timestamp: sensor.timestamp,
      };
    }
    if (tipo === "CO2" && valor > 1000) {
      return {
        idSensor: sensor.id,
        mensaje: "Nivel de CO2 peligroso",
        valor,
        timestamp: sensor.timestamp,
      };
    }
    return null;
  }
}
export default LecturasService;
