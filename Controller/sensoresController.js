import { sensoresService } from "../Container/sensoresContainer.js";


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