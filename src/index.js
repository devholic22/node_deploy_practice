import dotenv from "dotenv";
dotenv.config();
import express from "express";
import { sequelize } from "../models";

const app = express();
const PORT = 8080;

const handleListen = () => {
  console.log(`Server listening at: http://localhost:${PORT}`);
};

app.listen(PORT, handleListen);
