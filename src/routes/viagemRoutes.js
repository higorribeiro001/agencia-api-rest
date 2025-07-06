import { Router } from "express";
import viagemController from "../controllers/ViagemController";

const router = new Router();

router.get('/', viagemController.index);
router.post('/', viagemController.store);
router.get('/:id', viagemController.show);
router.patch('/:id', viagemController.update);
router.delete('/:id', viagemController.delete);

export default router;