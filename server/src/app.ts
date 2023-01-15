import "express-async-errors";
import express, { NextFunction, Request, Response } from "express";
import routes from "./routes";
import { AppError } from "./errors/AppError";


const app = express();

app.use(express.json());
app.use(routes);

app.use((error: Error, request: Request, response: Response, next: NextFunction) => {
  if(error instanceof AppError) {
    return response.status(error.statusCode).json({
      message: error.message
    });
  }

  return response.status(500).json({
    status: "Error",
    message: `Internal server error ${error.message}`
  });
});

export default app;