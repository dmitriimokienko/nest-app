import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { IUser } from './interfaces/user.interface';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  // TODO: replace to IUsersService
  constructor(private readonly usersService: UsersService) {}

  //   @Get('/user')
  //   async findAll(): Promise<IUser[]> {}

  @Get('/user')
  async find(
    @Query('email') substr: string,
    @Query('limit') limit: string,
  ): Promise<IUser[]> {
    const users = await this.usersService.find(substr, limit);
    return users;
  }

  @Post('/user')
  async create(@Body() createUserDto: CreateUserDto): Promise<IUser> {
    const user = await this.usersService.create(createUserDto);
    return user;
  }

  @Get('/user/:id')
  async findById(@Param('userId') userId: string): Promise<IUser> {
    const user = await this.usersService.findById(userId);
    return user;
  }

  @Put('/user/:id')
  async update(
    @Param('userId') userId: string,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<IUser> {
    const user = await this.usersService.update(userId, updateUserDto);
    return user;
  }

  @Delete('/user/:id')
  async delete(@Param('userId') userId: string): Promise<IUser> {
    const user = await this.usersService.delete(userId);
    return user;
  }
}
