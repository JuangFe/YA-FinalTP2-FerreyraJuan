class AlertasService {
constructor(alertasDAO){
    this.alertasDAO = alertasDAO;
}

listarAlertas(){
    return this.alertasDAO.listarTodas();
}

}
export default AlertasService;