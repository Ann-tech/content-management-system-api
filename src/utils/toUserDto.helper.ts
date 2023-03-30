import { UserEntity } from "src/typeorm/entities/user.entity";
import { UserDto } from "src/users/dtos/User.dto";

export const toUserDto = (data: UserEntity): UserDto => {  
    const { id, firstName, lastName, email } = data;
    let userDto: UserDto = { id, firstName, lastName,  email};
    return userDto;
};
