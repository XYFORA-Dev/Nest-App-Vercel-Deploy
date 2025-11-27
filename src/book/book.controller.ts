import { Post, HttpCode, Body, Get, Param, Put, Delete } from "@nestjs/common/decorators/http";
import { Controller } from "@nestjs/common/decorators/core";
import { CreateBookDTO, UpdateBookDTO } from "./book.dto";
import { BookService } from "./book.service";
import { HttpStatus } from "@nestjs/common";

@Controller("books")
export class BookController {

    constructor(private readonly bookService: BookService) { };

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() createBookDto: CreateBookDTO) {
        return this.bookService.create(createBookDto);
    }

    @Get()
    findAll() {
        return this.bookService.findAll();
    }

    @Get(":id")
    findOne(@Param("id") id: string) {
        return this.bookService.findOne(id);
    }

    @Put(":id")
    update(@Param("id") id: string, @Body() updateBookDto: UpdateBookDTO) {
        return this.bookService.update(id, updateBookDto);
    }

    @Delete(":id")
    @HttpCode(HttpStatus.NO_CONTENT)
    remove(@Param("id") id: string) {
        return this.bookService.remove(id);
    }

};