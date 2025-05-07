import express from 'express';
import dotenv from 'dotenv';
import { dataBase } from './api/db.js';
import router from './api/router.js';
// import cors from 'cors';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Registro das rotas
app.use('/app', router);

// sincronizando o banco de dados 
dataBase.sync()
.then(() => {
    console.log("Sincronizado com sucesso");
})
.catch((err) => {
    console.log("Erro: deu ruim! " + err);
});

// RODANDO NOSSA APLICAÇÃO NA PORTA SETADA
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
