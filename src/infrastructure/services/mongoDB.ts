import mongoose from "mongoose";

export class MongoDB {
    async connect() {
        await mongoose.connect("mongodb://localhost:27017/marketplace");
        console.log("Conected MongoDB:27017");
        return mongoose;
    }

    async disconnect() {
        await mongoose.disconnect();
        console.log("MongoDB Disconected");
    }
}
