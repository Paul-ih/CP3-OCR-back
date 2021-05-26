const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();

const stuffRoutes = require("./routes/stuff");

//
// MONGODB ATLAS

mongoose
  .connect(
    "mongodb+srv://paul:h39bW3OuLF2u9EkQ@cluster0.aleua.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));

//
// MIDDLEWARES vvv

// MIDDLEWARE GENERAL (sans route), Header dans objet response
// Eviter erreurs CORS et autoriser accès http front
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use(bodyParser.json());

// RENVOI du CRUD VERS le ROUTER STUFF.js

app.use("/api/stuff", stuffRoutes);

// MIDDLEWARES ^^^

module.exports = app;
