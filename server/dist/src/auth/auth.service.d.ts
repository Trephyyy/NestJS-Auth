import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
export declare class AuthService {
    private usersService;
    private jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    validateUser(username: string, pass: string): Promise<any>;
    loginLocal(user: any): Promise<{
        access_token: string;
    }>;
    LoginSteam(user: any): Promise<{
        access_token: string;
    }>;
}
