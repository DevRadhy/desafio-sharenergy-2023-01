import { PrismaClient } from "@prisma/client";
import User from "../entities/User";
import { AppError } from "../errors/AppError";
import UserRepository from "../repositories/UsersRepository";

const prisma = new PrismaClient();

class UserDatabase implements UserRepository {
  async getUsers(): Promise<User[]> {
    const users = await prisma.user.findMany();

    return users;
  }

  async findById(id: string): Promise<User> {
    const user = await prisma.user.findUnique({
      where: {
        id,
      },
    });

    if(!user) {
      throw new AppError("User does not exists.")
    }

    return user;
  }

  async create(user: User): Promise<User> {
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

  async save(user: User): Promise<User> {
    const userAlreadyExists = await prisma.user.findUnique({
      where: {
        id: user.id,
      },
    });

    if (!userAlreadyExists) {
      throw new AppError("User does not exists.");
    }

    await prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        name: user.name,
        email: user.email,
        phone: user.phone,
        adress: user.adress,
        cpf: user.cpf,
      },
    });

    return user;
  }
  
  async delete(id: string): Promise<void> {
    const user = await prisma.user.findUnique({
      where: {
        id
      }
    });

    if(!user) {
      throw new AppError("User does not exists.");
    }

    await prisma.user.delete({
      where: {
        id
      }
    });
  }
}

export default UserDatabase;