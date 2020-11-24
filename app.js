const express = require("express")
const app = express();
const mongoose  = require("mongoose");
require("dotenv/config");

// Import Routes
const postsRoute = require("./routes/posts");

app.use("/posts", postsRoute);

// Rooutes
app.get("/", (req, res) => {
    res.send("Here is Home")
});

// Connect to MongoDB
mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log("Connected to MongoDB")
); 

// How to we start listening to the server
app.listen(8080);