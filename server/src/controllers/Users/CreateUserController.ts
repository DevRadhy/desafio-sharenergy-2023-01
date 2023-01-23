import { Request, Response } from "express";
import { CreateUser } from "../../useCases/Users/createUser";
import User from "../../entities/User";

class CreateUserController {
  constructor(
    private createUser: CreateUser
  ) {}

  async handle(request: Request, response: Response) {
    const { name, email, phone, adress, cpf } = request.body;

    const user = new User({
      name,
      email,
      phone,
      adress,
      cpf,
    });

    const createUser = await this.createUser.execute(user);

    return response.status(201).json(createUser);
  }
}

export { CreateUserController };
