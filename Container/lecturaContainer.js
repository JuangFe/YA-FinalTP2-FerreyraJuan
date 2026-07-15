import LecturasDAO from "../dao/LecturasDAO.js";
import SensoresDAO from "../dao/SensoresDAO.js"
import AlertasDAO from "../dao/AlertasDAO.js"
import LecturasService from "../Services/lecturasService.js";

const lecturasDAO = new LecturasDAO();
const sensoresDAO = new SensoresDAO();
const alertasDAO  = new AlertasDAO();

const lecturasService = new LecturasService(lecturasDAO,sensoresDAO,alertasDAO);

export { lecturasService }