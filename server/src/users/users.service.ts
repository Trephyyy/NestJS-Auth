import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}
  async createLocal(createUserDto: CreateUserDto) {
    const strategy = 'local';
    const id = Math.floor(Math.random() * 90000000) + 10000000;
    const user = await this.findOneByUsername(createUserDto.username);

    if (user) {
      throw new HttpException('Username Taken', HttpStatus.BAD_REQUEST);
    } else {
      const user = {
        id: id,
        username: createUserDto.username,
        password: createUserDto.password,
        authStrategy: strategy,
      };
      return this.userRepository.save(user);
    }
  }

  async createSteam(data) {
    const strategy = 'steam';
    const id = Math.floor(Math.random() * 90000000) + 10000000;
    const user = {
      id: id,
      authStrategy: strategy,
      username: data.username,
      steamId: data.id,
    };
    return this.userRepository.save(user);
  }

  async findOneByUsername(username: string): Promise<User | undefined> {
    return this.userRepository.findOne({ where: { username } });
  }

  async findOneBySteamId(steamId: number): Promise<User | undefined> {
    return this.userRepository.findOne({ where: { steamId } });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
