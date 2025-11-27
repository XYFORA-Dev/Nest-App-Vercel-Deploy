import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type BookDocument = Book & Document;

@Schema({ timestamps: true })
export class Book extends Document {
    @Prop({ required: true })
    title: string;

    @Prop({ required: true })
    author: string;

    @Prop()
    createdAt: Date;

    @Prop()
    updatedAt: Date;
};

export const BookSchema = SchemaFactory.createForClass(Book);