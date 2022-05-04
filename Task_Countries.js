const express = require('express');
const app = express();
const capital = require("./Capital.js");

app.use("/capital", capital);

app.listen(3000, function () {
    console.log("Server is running");
})