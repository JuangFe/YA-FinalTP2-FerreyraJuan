class Sensor {

    constructor(id,tipo,valor,timestamp) {

        if(!id || typeof id !== "string" || id.length !== 8
             || !/^[A-Za-z0-9]+$/.test(id)){
                throw new Error("El id no cumple las condiciones")
             }
        const tiposValidos = ["TEMPERATURA","HUMEDAD","CO2"];
        if(!tiposValidos.includes(tipo)){
            throw new Error("El tipo de ser TEMPERATURA-HUMEDAD-CO2 ");
        } 
        if(typeof valor !== "number" || Number.isNaN(valor)){
            throw new Error("El valor deber ser numerico");
        }

        if(!timestamp || typeof timestamp !== "string"){
            throw new Error("El timestamp debe ser string")
        }


this.id = id;
this.tipo = tipo;
this.valor = valor;
this.timestamp = timestamp;
}
}

export default Sensor;

