class SensoresService {

    constructor(sensoresDAO){
        this.sensoresDAO = sensoresDAO;
    }
    listarSensores(){
        return this.sensoresDAO.listarTodos();
    }
    crearSensor(data){
        return this.sensoresDAO.crear(data);
    }
    registrarLectura(lectura){
        return lectura;
    }

}

export default SensoresService;