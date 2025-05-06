const express = require('express');
const { Pool } = require('pg');

const app = express();
app.use(express.json());

const pool = new Pool({
  user: 'fabi',
  host: 'localhost',
  database: 'postgres',
  password: 'fabi17',
  port: 5432,
});

// Rota de teste
app.get('/', (req, res) => {
  res.send('API está rodando');
});

// Buscar dados do banco
app.get('/usuarios', async (req, res) => {
  try {
    const resultado = await pool.query('SELECT * FROM usuarios');
    res.json(resultado.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Erro no servidor');
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
