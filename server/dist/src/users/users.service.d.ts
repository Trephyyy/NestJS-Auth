import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
export declare class UsersService {
    private userRepository;
    constructor(userRepository: Repository<User>);
    createLocal(createUserDto: CreateUserDto): Promise<{
        id: number;
        username: string;
        password: string;
        authStrategy: string;
    } & User>;
    createSteam(data: any): Promise<{
        id: number;
        authStrategy: string;
        username: any;
        steamId: any;
    } & User>;
    findOneByUsername(username: string): Promise<User | undefined>;
    findOneBySteamId(steamId: number): Promise<User | undefined>;
    update(id: number, updateUserDto: UpdateUserDto): string;
    remove(id: number): string;
}
