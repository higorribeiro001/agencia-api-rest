import { Router } from "express";
import fotoviagemController from "../controllers/FotoViagemController";

const router = new Router();

router.post('/', fotoviagemController.store);

export default router;