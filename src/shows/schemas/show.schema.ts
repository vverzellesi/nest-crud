/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type ShowDocument = Show & Document;

@Schema()
export class Show {
    @Prop()
    name: string;

    @Prop()
    genre: string;

    @Prop()
    stars: number;
}

export const ShowSchema = SchemaFactory.createForClass(Show);