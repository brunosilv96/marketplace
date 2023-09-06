import express from "express";

// Import routes
import userRoutes from "./routes/user-routes";

// Config to Express
const app = express();
app.use(express.json());
app.use(express.static("public"));

// Apply routes
app.use("/api/users", userRoutes);

app.listen(5000, () => {
    console.log("Express online na porta 5000");
});
