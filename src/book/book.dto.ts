import { IsString, IsNotEmpty } from "class-validator";

export class CreateBookDTO {
    @IsString()
    @IsNotEmpty()
    title: string;

    @IsString()
    @IsNotEmpty()
    author: string;
};

export class UpdateBookDTO {
    @IsString()
    title?: string;

    @IsString()
    author?: string;
};