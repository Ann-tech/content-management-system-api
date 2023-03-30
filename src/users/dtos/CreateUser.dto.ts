import { IsNotEmpty, IsEmail } from "class-validator";

//To pass information upon registering user
export class CreateUserDto {
    @IsNotEmpty()
    firstName: string;

    @IsNotEmpty()
    lastName: string;

    @IsNotEmpty()
    password: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;
}