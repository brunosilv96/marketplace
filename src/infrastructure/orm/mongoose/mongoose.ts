import mongoose from "mongoose";

async function main() {
    await mongoose.connect("mongodb://localhost:27017/marketplace");
    console.log("MONGO:27017");
}

main().catch((error) => console.log(error));

export default mongoose;
