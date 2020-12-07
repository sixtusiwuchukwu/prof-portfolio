require("dotenv").config();
const mongoose = require("mongoose");
const { ApolloServer } = require("apollo-server-express");
const express = require("express");
const bodyParser = require("body-parser");
const { typeDefs, resolvers } = require("./src/schema");
const app = express();
const User = require("./src/models/user/admin");
const datasources = require("./src/datasource");
const isAuth = require("./src/middleware/Authentication");
// const cors = require("./src/middleware/Cors");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const {
  DB_URL,
  PORT,
  ADMIN_GMAIL,
  ADMIN_PASSWORD,
  ADMIN_USERNAME,
} = process.env;

var corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
};
// app.use(cors(corsOptions));
// const allowedOrigins = ["http://localhost:3000"];
mongoose.set("useFindAndModify", false);
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(isAuth);
app.use(cookieParser());

//database setup
mongoose
  .connect(DB_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log(`database is connected ${DB_URL}`))
  .catch((err) => console.log(err));
const db = mongoose.connection;

// inserting data to the admin collection database
db.once("open", async () => {
  if ((await User.countDocuments().exec()) > 0) {
    return console.log("admin account already exist");
  }
  Promise.all([
    User.create({
      gmail: ADMIN_GMAIL,
      password: ADMIN_PASSWORD,
      username: ADMIN_USERNAME,
    }),
  ])
    .then(() => console.log("Admin account created!"))
    .catch((e) => console.log("error occured while creating Admin account", e));
});

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req, res }) => ({
    req,
    res,
    datasources,
  }),
  introspection: true,
  tracing: true,
  playground: true,
});

server.applyMiddleware({ app, path: "/", cors: false });

// server port setup
app.listen(PORT, () => {
  console.log(`server is currently listening on localhost:${PORT}`);
});
