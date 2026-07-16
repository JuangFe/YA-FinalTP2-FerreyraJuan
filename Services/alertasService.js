class AlertasService {
constructor(alertasDAO){
    this.alertasDAO = alertasDAO;
}

listarAlertas(){
    return this.alertasDAO.listarTodas();
}
 evaluarLectura({ idSensor, tipo, valor }) {
    const timestamp = new Date().toISOString();
    let alerta = null;

    if (tipo === "TEMPERATURA" && valor > 35) {
      alerta = new Alerta({
        idSensor,
        mensaje: "Temperatura por encima del umbral (35°C)",
        valor,
        timestamp
      });
    }

    if (tipo === "HUMEDAD" && valor < 20) {
      alerta = new Alerta({
        idSensor,
        mensaje: "Humedad por debajo del umbral (20%)",
        valor,
        timestamp
      });
    }

    if (tipo === "CO2" && valor > 1000) {
      alerta = new Alerta({
        idSensor,
        mensaje: "CO2 por encima del umbral (1000 ppm)",
        valor,
        timestamp
      });
    }

    if (alerta) {
      this.alertasDAO.guardar(alerta);
    }

    return alerta;
  }
}
export default AlertasService;