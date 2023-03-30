import { IsNotEmpty, IsEmail } from "class-validator";


//used when user info is returned
export class CreateUserDto {
    @IsNotEmpty() 
    id: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    password: string;
}