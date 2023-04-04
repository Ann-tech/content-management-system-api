import { IsNotEmpty, MaxLength } from "class-validator";

//To pass information upon registering user
export class CreateUserDto {
    @IsNotEmpty()
    @MaxLength(60, { message: "Title is too long. Your title should be less than 60 characters"})
    title: string;

    @IsNotEmpty()
    body: string;
}