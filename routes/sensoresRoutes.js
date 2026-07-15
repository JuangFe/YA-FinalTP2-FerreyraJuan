import {Router} from 'express';
import { listarSensores,crearSensor } from '../Controller/sensoresController.js';

const router = Router();

router.get("/",listarSensores);
router.post("/",crearSensor);

export default router;