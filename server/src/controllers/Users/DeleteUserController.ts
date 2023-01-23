import { Request, Response } from "express";
import { DeleteUser } from "../../useCases/Users/deleteUser";

class DeleteUserController {
  constructor(private deleteUser: DeleteUser) {}

  async handle(request: Request, response: Response) {
    const { id } = request.params;

    await this.deleteUser.execute(id);

    return response.status(200).json({
      message: "User deleted successfully",
    });
  }
}

export { DeleteUserController };