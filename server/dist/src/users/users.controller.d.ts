import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    createLocal(createUserDto: CreateUserDto): Promise<{
        id: number;
        username: string;
        password: string;
        authStrategy: string;
    } & import("./entities/user.entity").User>;
}
