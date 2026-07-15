import { alertasService } from "../Container/alertaContainer.js"

export function listarAlertas(req,res,next){
    try{
        const alertas = alertasService.listarAlertas();
        return res.status(200).json(alertas);
    }catch(err){
        next(err);
    }
}