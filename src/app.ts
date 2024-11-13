import express, { NextFunction, Request, Response } from "express";
import cors from "cors";

import { configs } from "./configs/config";
import { ApiError } from "./errors/api.error";
import { authRouter } from "./routers/auth.router";
import { userRouter } from "./routers/user.router";
import connectDB from "./configs/connectionDb";


const app = express();
connectDB().then();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/auth", authRouter);
app.use("/users", userRouter);
app.use(cors({
  origin: "*"
}));

app.use(
  "*",
  (err: ApiError, req: Request, res: Response, next: NextFunction) => {
    return res.status(err?.status || 500).json({
      message: err?.message,
      status: err?.status
    });
  }
);

const PORT = configs.PORT;
if(PORT){
  app.listen(PORT, () => {
    console.log(`Server has started on PORT ${PORT}`);
  });
}

module.exports = app;

