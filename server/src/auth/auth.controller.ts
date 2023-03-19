import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  Request,
  Response,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Public } from 'utils/consts';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { SteamAuthGuard } from './guards/steam-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async loginLocal(@Request() req) {
    return this.authService.loginLocal(req.user);
  }

  @UseGuards(SteamAuthGuard)
  @Get('/steam')
  loginSteam(): void {}

  @UseGuards(SteamAuthGuard)
  @Get('/steam/return')
  returnSteam(@Request() req): any {
    return req.user;
  }
}
