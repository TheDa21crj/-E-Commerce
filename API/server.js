const express = require("express");
const mongoose = require("mongoose");
const fs = require("fs");

const app = express();
app.use(express.json({ extended: true }));

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.get("/api", (req, res) => {
    fs.readFile(`${__dirname}/Category/category.json`, "utf-8", (err, data) => {
        res.status(200).send(data);
        console.log(data);
    });
});

const port = process.env.PORT || 80;

app.listen(port, () => {
    console.log(`Server is running at ${port}`);
});