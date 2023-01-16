import { Injectable } from '@nestjs/common';
import { nanoid } from 'nanoid';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { IUser } from './interfaces/user.interface';
import { IUsersService } from './interfaces/usersService.intreface';

@Injectable()
export class UsersService implements IUsersService {
  private readonly users: IUser[] = [];

  find(emailSubstring: string, count?: string): Promise<IUser[]> {
    return Promise.resolve(this.users);
  }

  findById(id: string): Promise<IUser> {
    throw new Error('Method not implemented.');
  }

  update(id: string, body: UpdateUserDto): Promise<IUser> {
    throw new Error('Method not implemented.');
  }

  delete(id: string): Promise<IUser> {
    throw new Error('Method not implemented.');
  }

  create(body: CreateUserDto): Promise<IUser> {
    this.users.push({ id: nanoid(), ...body });
    return Promise.resolve({ id: nanoid(), ...body });
  }
}
