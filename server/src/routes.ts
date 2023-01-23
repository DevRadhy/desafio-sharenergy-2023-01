import { Router } from "express";
import {
  createUserController,
  deleteUserController,
  updateUserController,
  getUsersController,
} from "./controllers/Users";

const routes = Router();

routes.get("/client/:id", (request, response) => {
  return updateUserController.handle(request, response);
});

routes.get("/clients/:id", (request, response) => {
  return getUsersController.handle(request, response);
});

routes.post("/client", (request, response) => {
  return createUserController.handle(request, response);
});

routes.patch("/client/:id", (request, response) => {
  return updateUserController.handle(request, response);
});

routes.delete("/client/:id", (request, response) => {
  return deleteUserController.handle(request, response);
});



export default routes;