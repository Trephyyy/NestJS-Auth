import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: CreateUserDto): Promise<{
        id: number;
        username: string;
        password: string;
        authStrategy: string;
    } & import("./entities/user.entity").User>;
    findOne(id: number): string;
    update(id: string, updateUserDto: UpdateUserDto): string;
    remove(id: string): string;
}
