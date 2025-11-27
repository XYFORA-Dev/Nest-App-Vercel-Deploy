import { Module } from "@nestjs/common/decorators/modules";
import { BookController } from "./book.controller";
import { MongooseModule } from "@nestjs/mongoose";
import { Book, BookSchema } from "./book.model";
import { BookService } from "./book.service";

@Module({
    imports: [
        MongooseModule.forFeature([{ name: Book.name, schema: BookSchema }])
    ],
    controllers: [BookController],
    providers: [BookService]
})
export class BookModule { };