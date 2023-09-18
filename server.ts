import express from "express";

// Import routes
import userRouters from "./src/application/routes/UserRoutes";

// Express configurations
const app = express();
app.use(express.json());

app.use("/user", userRouters);

app.listen(3000, () => {
    console.log("EXPRESS:3000");
});
