import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateLastGreetingDto } from "./create-greeting.dto";
import { LastGreeting, LastGreetingsDocument } from "./lastGreeting.schema";

export class GreetingsRepository {
    constructor(
        @InjectModel(LastGreeting.name) 
        private lastGreetingModel: Model<LastGreetingsDocument>
    ) {}

    async findAllLastGreetings(): Promise<LastGreeting[]> {
        return this.lastGreetingModel.find();
    }

    async saveLastGreetings(createLastGreetingDto: CreateLastGreetingDto): Promise<LastGreeting> {
        const lastGreeting = new this.lastGreetingModel(createLastGreetingDto);
        return await lastGreeting.save();
    }
    
}