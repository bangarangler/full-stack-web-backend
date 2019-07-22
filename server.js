require("dotenv").config();

const express = require("express");
const cors = require('cors')
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const csrf = require('csurf')


//const MONGODB_URI = `mongodb+srv:${process.env.MONGO_USER}:${
  //process.env.MONGO_PW
//}@full-stack-web-backend-hf8uf.mongodb.net/root`;
//const MONGODB_URI = `mongodb://<dbuser>:<dbpassword>@ds253537.mlab.com:53537/heroku_k33x53h4`

const MONGODB_URI = process.env.MONGODB_URI || `mongodb+srv://${process.env.MONGO_USER}:${
  process.env.MONGO_PW
}@full-stack-web-backend-hf8uf.mongodb.net/root`;


const server = express();
//server.options('*', cors())
//const corsOptions = {
  //origin: 'https://full-stack-web-challenge.herokuapp.com/',
  //optionsSuccessStatus: 200
//}
const csrfProtection = csrf();

const factoryRoutes = require('./routes/factory.js')

//server.use(cors(corsOptions))
server.options('/*', function(req,res,next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS')
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With, Accept')
  res.send(200)
})
server.use(function(req,res,next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With, Accept');
  if ('OPTIONS' === req.method) {
    res.send(200);
  } else {
    next();
  }
})
server.use(cors())
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json())

server.use(factoryRoutes, cors())
server.use(csrfProtection)

const port = process.env.PORT || 4000;
mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true })
  .then(result => {
    server.listen(port);
  })
  .catch(err => {
    console.log(err);
  });
