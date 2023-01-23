import { Request, Response } from "express";
import { FindUser } from "../../useCases/Users/findUser";

class FindUserController {
  constructor(private findUser: FindUser) {}

  async handle(request: Request, respones: Response) {
    const { id } = request.params;

    const user = await this.findUser.execute(id);

    return respones.json(user);
  }
}

export { FindUserController };