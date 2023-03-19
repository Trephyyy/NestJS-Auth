import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-steam';
import { AuthService } from '../auth.service';

@Injectable()
export class SteamStrategy extends PassportStrategy(Strategy, 'steam') {
  constructor(private readonly authService: AuthService) {
    super({
      returnURL: 'http://localhost:3001/auth/steam/return',
      realm: 'http://localhost:3001/',
      apiKey: process.env.STEAM_KEY,
    });
  }

  async validate(identifier: string, profile: any): Promise<any> {
    return this.authService.LoginSteam(profile);
  }
}
