import { Injectable } from "@nestjs/common/decorators/core";
import { CreateBookDTO, UpdateBookDTO } from "./book.dto";
import { NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Book } from "./book.model";
import { Model } from "mongoose";

@Injectable()
export class BookService {

    constructor(@InjectModel(Book.name) private bookModel: Model<Book>) { };

    async create(createBookDto: CreateBookDTO): Promise<Book> {
        const book = new this.bookModel(createBookDto);
        return book.save();
    }

    async findAll(): Promise<Book[]> {
        return this.bookModel.find().exec();
    }

    async findOne(id: string): Promise<Book> {
        const book = await this.bookModel.findById(id).exec();
        if (!book) {
            throw new NotFoundException(`Book with ID ${id} not found`);
        }
        return book;
    }

    async update(id: string, updateBookDto: UpdateBookDTO): Promise<Book> {
        const book = await this.bookModel
            .findByIdAndUpdate(id, updateBookDto, { new: true })
            .exec();
        if (!book) {
            throw new NotFoundException(`Book with ID ${id} not found`);
        }
        return book;
    }

    async remove(id: string): Promise<void> {
        const result = await this.bookModel.findByIdAndDelete(id).exec();
        if (!result) {
            throw new NotFoundException(`Book with ID ${id} not found`);
        }
    }

};