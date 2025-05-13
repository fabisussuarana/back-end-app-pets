import {
  listarUsuarios,
  buscarUsuarioPorId,
  criarUsuario,
  deletarUsuario,
  atualizarUsuario,
} from "../controllers/usuarioController.js";
import {
  listarPosts,
  buscarPostPorId,
  criarPost,
  atualizarPost,
  deletarPost,
} from "../controllers/postsController.js";
import {
  listarComentarios,
  buscarComentarioPorId,
  criarComentario,
  atualizarComentario,
  deletarComentario,
} from "../controllers/comentariosController.js";
import {
  listarDicas,
  buscarDicaPorId,
  criarDica,
  atualizarDica,
  deletarDica,
} from "../controllers/dicasController.js";
import { Router } from "express";

// inicializando rotas
const router = Router();

router.get("/", (req, res) => {
  res.send("Rotas funcionando!");
});
router
  .get("/usuarios", listarUsuarios)
  .get("/usuarios/:id", buscarUsuarioPorId);
router.post("/usuarios", criarUsuario);
router.put("/usuarios/:id", atualizarUsuario);
router.delete("/usuarios/:id", deletarUsuario);

router.get("/posts", listarPosts).get("/posts/:id", buscarPostPorId);
router.post("/posts", criarPost);
router.put("/posts/:id", atualizarPost);
router.delete("/posts/:id", deletarPost);

router
  .get("/comentarios", listarComentarios)
  .get("/comentarios/:id", buscarComentarioPorId);
router.post("/comentarios", criarComentario);
router.put("/comentarios/:id", atualizarComentario);
router.delete("/comentarios/:id", deletarComentario);

router.get("/dicas", listarDicas).get("/dicas/:id", buscarDicaPorId);
router.post("/dicas", criarDica);
router.put("/dicas/:id", atualizarDica);
router.delete("/dicas/:id", deletarDica);

export default router;
