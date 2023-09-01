import express from "express";

// Config to Express
const app = express();
app.use(express.json());
app.use(express.static("public"));

// Routes

app.listen(5000, () => {
    console.log("Express online na porta 5000");
});
