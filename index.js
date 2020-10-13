const express = require("express");

const app = express();

const cors = require('cors')

// Database Connection

require("dotenv/config");
const mongoose = require("mongoose");

mongoose.connect(process.env.DB_CONNECTION_STRING);

mongoose.connection.once('open', () => {
  console.log("Connected to the MongoDB")
})


// Allow CORS
app.use(cors())



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
