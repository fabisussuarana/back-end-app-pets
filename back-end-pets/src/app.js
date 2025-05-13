import express from "express";
import routes from "./routes.js";

const app = express();

app.use(express.json());
app.use(routes);

const PORT = process.env.PORT || 2211;

app.listen(PORT, () => console.log(`server running on port ${PORT}`));
