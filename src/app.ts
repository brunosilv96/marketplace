import express from "express";

// Import routes
import userRoutes from "./routes/user-routes";

// Config to Express
const app = express();
app.use(express.json());
app.use(express.static("public"));

// Apply routes
app.use("/api/users", userRoutes);

export { app };
