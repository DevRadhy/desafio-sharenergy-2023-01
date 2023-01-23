import { Request, Response } from "express";
import { UpdateUser } from "../../useCases/Users/updateUser";

class UpdateUserController {
  constructor(
    private updateUser: UpdateUser
  ) {}

  async handle(request: Request, response: Response) {
    const { id, name, email, phone, adress, cpf } = request.body;

    const updateUser = await this.updateUser.execute({
      id,
      name,
      email,
      phone,
      adress,
      cpf,
    });

    return response.status(200).json(updateUser);
  }
}

export { UpdateUserController };
