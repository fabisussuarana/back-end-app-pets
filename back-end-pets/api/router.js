import { listarUsuarios } from "./controllers/usuarioController.js";
import { Router } from 'express';

// inicializando rotas
const router = Router();

router.get('/', (req, res) => {
    res.send('Rotas funcionando!');
});
router.get("/usuarios", listarUsuarios); 

export default router;