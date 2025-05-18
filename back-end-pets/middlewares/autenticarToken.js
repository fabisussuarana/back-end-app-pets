import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const autenticarToken = (req, res, next) => {
  const token = req.headers['authorization'];

  if (!token)
    return res.status(401).json({ erro: 'Token não fornecido' });

  const tokenLimpo = token.replace('Bearer ', '');

  jwt.verify(tokenLimpo, process.env.JWT_SECRET, (err, usuario) => {
    if (err) return res.status(403).json({ erro: 'Token inválido' });

    req.usuario = usuario;
    next();
  });
};

export default autenticarToken;