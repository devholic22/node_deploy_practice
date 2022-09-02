import dotenv from "dotenv";
dotenv.config();
import express from "express";
import globalRouter from "./routers/globalRouter";
import { sequelize } from "../models";

const app = express();
const PORT = 8080;

sequelize
  .sync({ force: false })
  .then(() => {
    console.log("✅ 데이터베이스 연결 성공");
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/", globalRouter);

const handleListen = () => {
  console.log(`Server listening at: http://localhost:${PORT}`);
};

app.listen(PORT, handleListen);
