require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
//const MongoDBStore = require("connect-mongodb-session")(session);

//const User = require('./models/user.js');

const MONGODB_URI = `mongodb+srv://${process.env.MONGO_USER}:${
  process.env.MONGO_PW
}@full-stack-web-backend-hf8uf.mongodb.net/root`;

const server = express();
//const store = new MongoDBStore({
//uri: MONGODB_URI,
//collection: "sessions"
//});

server.use(bodyParser.urlencoded({ extended: false }));

mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true })
  .then(result => {
    server.listen(3000);
  })
  .catch(err => {
    console.log(err);
  });
