require("dotenv").config();

const express = require("express");
const cors = require('cors')
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

const factoryRoutes = require('./routes/factory.js')

server.use(cors())
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json())

server.use(factoryRoutes)

mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true })
  .then(result => {
    server.listen(4000);
  })
  .catch(err => {
    console.log(err);
  });
