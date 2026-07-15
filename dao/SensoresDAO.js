import Sensor from "../models/Sensor.js"

class SensoresDAO {
    constructor() {
        this.sensores = new Map();
    }

listarTodos(){
    return Array.from(this.sensores.values());
}

crear(data){
const { id, tipo, valor, timestamp } = data;
        const sensor = new Sensor(id, tipo, valor, timestamp);
        this.sensores.set(sensor.id, sensor);
        return sensor;
}
}
export default SensoresDAO;