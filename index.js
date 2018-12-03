const express = require("express");
const parser = require("body-parser");

const app = express();



app.use(parser.urlencoded({ extended: true }));

app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());

app.listen(8000, () => console.log("on port 8000..."));
