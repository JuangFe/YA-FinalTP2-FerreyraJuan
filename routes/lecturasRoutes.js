import {Router} from 'express';
import {procesarLectura} from "../Controller/lecturasController.js";

const router = Router();
router.post("/",procesarLectura);

export default router;