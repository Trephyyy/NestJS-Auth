import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOneByUsername(username);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async loginLocal(user: any) {
    const payload = { username: user.username, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
  async LoginSteam(user: any) {
    const personaname = user._json.personaname;
    const steamId = user._json.steamid;
    const existing = await this.usersService.findOneBySteamId(steamId);
    console.log(existing);

    if (!existing) {
      const user = { id: steamId, username: personaname };
      this.usersService.createSteam(user);
    } else {
      const payload = { id: steamId, sub: personaname };
      return {
        access_token: this.jwtService.sign(payload),
      };
    }
  }
}
