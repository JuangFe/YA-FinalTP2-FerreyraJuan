import SensoresDAO from "../dao/SensoresDAO.js"
import SensoresService from "../Services/sensoresService.js"

const sensoresDAO = new SensoresDAO();
const sensoresService = new SensoresService(sensoresDAO);

export { sensoresService }