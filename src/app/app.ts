import express from "express";

// Import routes
import UserRouters from "./routes/UserRoutes";

// Config to Express
const app = express();
app.use(express.json());
app.use(express.static("public"));

// Apply routes
app.use("/api/users", UserRouters);

app.listen(5000, () => {
    console.log("Express online na porta 5000");
});
