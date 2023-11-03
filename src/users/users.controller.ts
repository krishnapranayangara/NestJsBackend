import { Controller, Get, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/user')
  createUser(@Body() body: any) {
    console.log(body);
    return this.usersService.createUser(body);
  }

  @Get('/user')
  getUser(@Body() body: any) {
    console.log(body.userId);
    return this.usersService.getUser(body.userId);
  }
}
