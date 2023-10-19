import express from "express";
import cors from "cors";
import { errorHandler } from "./helpers/error-handler.js";
import router from "./mock/mock.controller.js";
import cookieParser from "cookie-parser";

const app = express();
app.use(cookieParser());
app.use(express.json({ limit: "1MB" }));
app.use(cors());

app.use("/", router);

app.use(errorHandler);

app.listen(3058, () => console.log(`Mock API listening on port 3058!`));
