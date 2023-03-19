import { AuthService } from '../auth.service';
declare const SteamStrategy_base: new (...args: any[]) => any;
export declare class SteamStrategy extends SteamStrategy_base {
    private readonly authService;
    constructor(authService: AuthService);
    validate(identifier: string, profile: any): Promise<any>;
}
export {};
