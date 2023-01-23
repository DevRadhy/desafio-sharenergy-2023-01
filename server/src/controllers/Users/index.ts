import UserDatabase from "../../database/UserDatabase";
import { CreateUser } from "../../useCases/Users/createUser";
import { DeleteUser } from "../../useCases/Users/deleteUser";
import { FindUser } from "../../useCases/Users/findUser";
import { GetUsers } from "../../useCases/Users/getUsers";
import { UpdateUser } from "../../useCases/Users/updateUser";
import { CreateUserController } from "./CreateUserController";
import { DeleteUserController } from "./DeleteUserController";
import { FindUserController } from "./FindUserController";
import { GetUsersController } from "./GetUsersController";
import { UpdateUserController } from "./UpdateUserController";

const userDatabase = new UserDatabase();

const createUser = new CreateUser(userDatabase);
const updateUser = new UpdateUser(userDatabase);
const deleteUser = new DeleteUser(userDatabase);
const getUsers = new GetUsers(userDatabase);
const findUser = new FindUser(userDatabase);

const createUserController = new CreateUserController(createUser);
const updateUserController = new UpdateUserController(updateUser);
const deleteUserController = new DeleteUserController(deleteUser);
const getUsersController = new GetUsersController(getUsers);
const findUserController = new FindUserController(findUser);

export { 
  createUserController,
  updateUserController,
  deleteUserController,
  getUsersController,
  findUserController,
};