import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { UserEntity } from 'src/typeorm/entities/user.entity';
import { UserDto } from 'src/users/dtos/User.dto';
import { toUserDto } from 'src/utils/toUserDto.helper';
import { LoginUserDto } from 'src/users/dtos/loginUser.dto';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';
import * as bycrpt from 'bcrypt'

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(UserEntity)    
        private readonly userRepo: Repository<UserEntity>, ) {}
    

    async findOne(options?: object): Promise<UserDto> {
        if (!options) options = {}
        const user =  await this.userRepo.findOne(options) as UserEntity;    
        return toUserDto(user);  
    }

    async findByLogin({ email, password }: LoginUserDto): Promise<UserDto> {    
        const user = await this.userRepo.findOne({ where: { email } });
        
        if (!user) {
            throw new HttpException('User not found', HttpStatus.UNAUTHORIZED);    
        }
        
        // compare passwords    
        const areEqual = await bycrpt.compare(password, user.password);
        
        if (!areEqual) {
            throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);    
        }
        
        return toUserDto(user);  
    }
    
    async findByPayload({ email }: any): Promise<UserDto> {
        return await this.findOne({ 
            where:  { email } });  
    }

    async create(userDto: CreateUserDto): Promise<UserDto> {    
        const { firstName, lastName, email, password } = userDto;
        
        // check if the user exists in the db    
        const userInDb = await this.userRepo.findOne({ 
            where: { email } 
        });
        if (userInDb) {
            throw new HttpException('User already exists', HttpStatus.BAD_REQUEST);    
        }
        
        const user: UserEntity = await this.userRepo.create({ firstName, lastName, email, password });
        await this.userRepo.save(user);
        return toUserDto(user);  
    }

    
}
