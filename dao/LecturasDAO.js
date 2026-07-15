class LecturasDAO {
    constructor(){
        this.lecturas = [];
    }
    guardarLectura(data){
        this.lecturas.push(data);
        return data;
    }

    listarTodas(){
        return this.lecturas;
    }
}
export default LecturasDAO;