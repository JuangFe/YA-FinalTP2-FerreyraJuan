import { lecturasService  } from "../Container/lecturaContainer.js";

export function procesarLectura(req,res,next){
    try{
        const lecturaProcesada = lecturasService.procesarLectura(req.body);
        return res.status(201).json(lecturaProcesada);
    }catch(err){
        next(err);
    }
}