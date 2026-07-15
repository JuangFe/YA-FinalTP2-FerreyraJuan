import {Router} from 'express';
import { listarAlertas } from "../Controller/alertasController.js"

const router = Router();
router.get("/",listarAlertas);

export default router;