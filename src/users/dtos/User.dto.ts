import { IsNotEmpty, IsEmail } from "class-validator";


//used when user info is returned
export class UserDto {
    @IsNotEmpty() 
    id: string;

    @IsNotEmpty() 
    firstName: string;

    @IsNotEmpty() 
    lastName: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;
}