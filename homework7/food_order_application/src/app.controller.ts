import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { LocalAuthGuard } from './common/auth/local-auth/local-auth.guard';
import { UserDto } from './users/dto/user.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
    private readonly authService: AuthService,
    ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @UseGuards(LocalAuthGuard)
  @Post ('auth/login')
  async login(@Request() req){
    return this.authService.login(req.user)
  }

  @Post ('auth/register')
  async registerUser (@Body() body: UserDto){
    const userId = await this.authService.register(body)
    
    return{
      message: 'User is registered',
      id:userId,
    }
  }
}
