import mongoose from "mongoose";

export class Mongose {
    async run() {
        await mongoose.connect("mongodb://127.0.0.0:27017/marketplace");
        console.log("Conectado ao MongoDB");
    }
}

export const mongoDB = new Mongose().run();
