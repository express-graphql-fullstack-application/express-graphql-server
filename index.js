const express = require("express");

const app = express();

// Database Connection

require("dotenv/config");
// const mongoose = require("mongoose");

const MongoClient = require('mongodb').MongoClient;
const uri = process.env.DB_CONNECTION_STRING;
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

const PORT = process.env.PORT || 5000;

var { graphqlHTTP } = require("express-graphql");

const schema = require("./schema/schema");

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(PORT, () => {
  console.log(`Running express application on PORT -> ${PORT}`);
});
