import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { IUser } from './user.interface';

export interface IUsersService {
  // TODO: temporary commented
  // signIn(email: string, password: string): Promise<User>;

  find(emailSubstring: string, count?: string): Promise<IUser[]>;

  findById(id: string): Promise<IUser>;

  create(body: CreateUserDto): Promise<IUser>;

  update(id: string, body: UpdateUserDto): Promise<IUser>;

  delete(id: string): Promise<IUser>;
}
