const express = require('express');
const app = express();

const homePage = require ("./views/home");

app.use("/home", rotaHome);