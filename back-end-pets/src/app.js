import express from "express";
import routes from "./routes.js";
import cors from "cors";
import dotenv from 'dotenv';

import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config();

const app = express();
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use(cors());
app.use(express.json());
app.use(routes);


const PORT = process.env.PORT || 2211;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
