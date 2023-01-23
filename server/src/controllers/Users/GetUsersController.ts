import { Request, Response } from "express";
import { GetUsers } from "../../useCases/Users/getUsers";

class GetUsersController {
  constructor(private getUsers: GetUsers) {}

  async handle(request: Request, response: Response) {
    const users = await this.getUsers.execute();

    return response.status(200).json(users);
  }
}

export { GetUsersController };