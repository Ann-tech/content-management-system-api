import { IsNotEmpty } from "class-validator";

//verify user login credentials
export class LoginUserDto {  
    @IsNotEmpty()  readonly email: string;
    @IsNotEmpty()  readonly password: string;
}