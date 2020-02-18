const express = require("express");
const app = express();

app.get("/", (req, res) => {

    res.send("Hello Test");
});

app.listen(3000);

module.exports.app = app;