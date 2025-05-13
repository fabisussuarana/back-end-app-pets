import express from "express";
import routes from "./routes.js";
import cors from "cors";

const app = express();



app.use(cors());

app.use(express.json());
app.use(routes);

const PORT = process.env.PORT || 2211;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
