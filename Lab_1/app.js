require('dotenv').config();
const express = require("express");
var app = express();

app.get("/", function (request, response){

    response.send(process.env.HELLO);
});

app.get("/error", function (request, response){

    response.status(404).send("NotFound");
});

app.get("/user", function (request, response){

    response.send({name:"Tom", age: process.env.AGE});
});

app.listen(3000);

module.exports.app = app;