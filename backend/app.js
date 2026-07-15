const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/welcome", (req, res) => {
    res.json({
        message: "Welcome"
    });
});

app.listen(3000, () => {
    console.log("Backend running on port 3000");
});