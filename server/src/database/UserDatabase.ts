import { PrismaClient } from "@prisma/client";
import User from "../entities/User";
import { AppError } from "../errors/AppError";
import UserRepository from "../repositories/UsersRepository";

class UserDatabase implements UserRepository {
  getUsers(): Promise<User[]> {
    throw new Error("Method not implemented.");
  }
  findById(id: string): Promise<User> {
    throw new Error("Method not implemented.");
  }
  async create(user: User): Promise<User> {
    const prisma = new PrismaClient();

    await prisma.$connect();

    const userAlreadyExists = await prisma.user.findUnique({
      where: {
        email: user.email,
      },
    });

    if (userAlreadyExists) {
      throw new AppError("User already exists.");
    }

    const userData = await prisma.user.create({
      data: {
        id: user.id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        adress: user.adress,
        cpf: user.cpf,
      },
    });

    return userData;
  }
  save(user: User): Promise<User> {
    throw new Error("Method not implemented.");
  }
  delete(id: string): void {
    throw new Error("Method not implemented.");
  }
}

export default UserDatabase;