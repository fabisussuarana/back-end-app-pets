import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import Usuarios from '../models/usuarios.js';
import dotenv from 'dotenv';

dotenv.config(); // Carrega variáveis do .env

const login = async (req, res) => {
  const { email, senha } = req.body;

  try {
    const usuario = await Usuarios.findOne({ where: { email } });

    if (!usuario) {
      return res.status(404).json({ erro: 'Usuário não encontrado' });
    }

    const senhaValida = await bcrypt.compare(senha, usuario.senha);

    if (!senhaValida) {
      return res.status(401).json({ erro: 'Senha inválida' });
    }

    const token = jwt.sign(
      { id: usuario.id, nome: usuario.nome },
      process.env.JWT_SECRET,
      { expiresIn: '1d' }
    );

    res.json({ mensagem: 'Login realizado com sucesso', token });
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
};

export { login }