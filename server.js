require("dotenv").config();

const express = require("express");
const cors = require('cors')
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const csrf = require('csurf')


//const MONGODB_URI = `mongodb+srv://${process.env.MONGO_USER}:${
  //process.env.MONGO_PW
//}@full-stack-web-backend-hf8uf.mongodb.net/root`;
const MONGODB_URI = `mongodb://<dbuser>:<dbpassword>@ds253537.mlab.com:53537/heroku_k33x53h4`

const server = express();
const csrfProtection = csrf();

const factoryRoutes = require('./routes/factory.js')

server.use(cors())
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json())

server.use(factoryRoutes)
server.use(csrfProtection)

mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true })
  .then(result => {
    server.listen(4000);
  })
  .catch(err => {
    console.log(err);
  });
