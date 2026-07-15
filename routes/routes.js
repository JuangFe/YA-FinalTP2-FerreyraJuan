import { Router } from "express";
import sensoresRoutes from "./sensoresRoutes.js"
import lecturasRoutes from "./lecturasRoutes.js"
import alertasRoutes from "./alertasRoutes.js"

const routes= Router()

routes.use("/sensores",sensoresRoutes);
routes.use("/lecturas",lecturasRoutes);
routes.use("/alertas",alertasRoutes);

export default routes