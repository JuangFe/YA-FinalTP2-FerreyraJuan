class AlertasDAO {
constructor(){
    this.alertas = [];
}

guardarAlerta(alerta){
    this.alertas.push(alerta);
    return alerta;
}

listarTodas(){
    return this.alertas;
}

}

export default AlertasDAO;