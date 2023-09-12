import { MongoDB } from "@/infrastructure/services/mongoDB";

export class UserModel {
    private mongoDB = new MongoDB();

    async execute() {
        const mongose = await this.mongoDB.connect();

        const { Schema } = mongose;

        const User = mongose.model(
            "Users",
            new Schema(
                {
                    name: {
                        type: String,
                        required: true,
                    },
                    age: {
                        type: Number,
                        required: true,
                    },
                },
                { timestamps: true }
            )
        );

        await this.mongoDB.disconnect();

        return User;
    }
}
