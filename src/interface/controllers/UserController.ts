import { Request, Response } from 'express';

import { User } from '../../domain/entities/User';

import { DIContainer } from '../../infrastructure/DIContainer';
import { CreateUserDto } from '../dto/user/CreateUserDto';
import { validate } from 'class-validator';
import { UpdateUserDto } from '../dto/user/UpdateUserDto';
import { DeleteUserDto } from '../dto/user/DeleteUserDto';
import { GetUserByIdDto } from '../dto/user/GetUserByIdDto';

export class UserController {
  private getAllUsers = DIContainer.getGetAllUsersUseCase();
  private createUser = DIContainer.getCreaetUserUseCase();
  private updateUser = DIContainer.getUpdateUserUseCase();
  private deleteUser = DIContainer.getDeleteUserUseCase();
  private getUserByID = DIContainer.getGetUserByIDUseCase();

  async create(req: Request, res: Response) {
    const dto = Object.assign(new CreateUserDto(), req.body);

    const errors = await validate(dto);

    if (errors.length > 0) {
      return res.status(400).json({ errors });
    }

    try {
      const userCreated = await this.createUser.execute(dto);
      return res.status(201).json(userCreated);
    } catch (error: any) {
      return res.status(500).json({
        message: 'Internal server error',
        error: error.message,
      });
    }
  }

  async update(req: Request, res: Response) {
    const dto = Object.assign(new UpdateUserDto(), req.body);

    const errors = await validate(dto);

    if (errors.length > 0) {
      return res.status(400).json({ errors });
    }

    await this.updateUser.execute(dto);

    return;
  }

  async delete(req: Request, res: Response) {
    const dto = Object.assign(new DeleteUserDto(), req.body);

    const errors = await validate(dto);

    if (errors.length > 0) {
      return res.status(400).json({ errors });
    }

    await this.deleteUser.execute(dto);

    return;
  }

  async getByID(req: Request, res: Response) {
    const dto = Object.assign(new GetUserByIdDto(), req.body);

    const errors = await validate(dto);

    if (errors.length > 0) {
      return res.status(400).json({ errors });
    }

    const user: User | null = await this.getUserByID.execute(dto);

    return res.json(user);
  }

  async getAll(req: Request, res: Response) {
    const users = await this.getAllUsers.execute();

    return res.json(users);
  }
}
