import AlertasDAO from "../dao/AlertasDAO.js";
import AlertasService from "../Services/alertasService.js"

const alertasDAO = new AlertasDAO();
const alertasService = new AlertasService(alertasDAO);

export { alertasService }