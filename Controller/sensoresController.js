import { sensoresService } from "../Container/sensoresContainer.js";
import { alertasService } from "../Container/alertasContainer.js";

export function listarSensores(req,res,next){
try{
const sensores = sensoresService.listarSensores();
return res.status(200).json(sensores);
}catch(err){
    next(err);
}
}

export function crearSensor(req,res,next){
 try {
    const sensor = sensoresService.crearSensor(req.body);
    return res.status(201).json(sensor);
  } catch (err) {
    next(err);
  }
}


export function registrarLectura(req, res, next) {
  try {
    const lectura = req.body; 


    const resultado = sensoresService.registrarLectura(lectura);


    const alerta = alertaService.evaluarLectura(lectura);

    return res.status(200).json({
      lectura: resultado,
      alertaGenerada: alerta
    });

  } catch (err) {
    next(err);
  }
}