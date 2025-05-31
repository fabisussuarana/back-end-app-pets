import {
  listarUsuarios,
  buscarUsuarioPorId,
  criarUsuario,
  deletarUsuario,
  atualizarUsuario,
  perfil,
} from "../controllers/usuarioController.js";
import {
  listarPosts,
  buscarPostPorId,
  criarPost,
  atualizarPost,
  deletarPost, listarComentariosDePost,
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
import autenticarToken from "../middlewares/autenticarToken.js";
import { login } from "../controllers/authController.js";
import uploadImage from "../controllers/uploadController.js";
import upload from "../config/multerConfig.js";

// inicializando rotas
const router = Router();

router.get("/", (req, res) => {
  res.send("Rotas funcionando!");
});

router.post("/usuarios", criarUsuario);
router.post("/login", login);

router.use(autenticarToken); // aplica para todas abaixo

router.get("/perfil", perfil);
router.put("/usuarios/:id", atualizarUsuario);
router.delete("/usuarios/:id", deletarUsuario);

router.get("/usuarios", listarUsuarios)
      .get("/usuarios/:id", buscarUsuarioPorId);

router.get("/posts", listarPosts)
      .get("/posts/:id", buscarPostPorId);
router.get("/posts/:id/comentarios", listarComentariosDePost);
router.post("/posts", upload.single('image'), criarPost);
router.put("/posts/:id", atualizarPost);
router.delete("/posts/:id", deletarPost);

router.get("/comentarios", listarComentarios)
      .get("/comentarios/:id", buscarComentarioPorId);
router.post("/comentarios", criarComentario);
router.put("/comentarios/:id", atualizarComentario);
router.delete("/comentarios/:id", deletarComentario);

router.get("/dicas", listarDicas)
      .get("/dicas/:id", buscarDicaPorId);
router.post("/dicas", upload.single('image'), criarDica);
router.put("/dicas/:id", atualizarDica);
router.delete("/dicas/:id", deletarDica);


export default router;
