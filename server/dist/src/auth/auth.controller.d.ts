import { AuthService } from './auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    loginLocal(req: any): Promise<{
        access_token: string;
    }>;
    loginSteam(): void;
    returnSteam(req: any): any;
}
