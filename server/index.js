const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, getFortune, getPhilosophy, getQuote, getDog, getDown } = require('./controller')

app.get("/api/compliment", getCompliment);
app.get("/api/fortunes", getFortune);
app.get("/api/philosophy", getPhilosophy);
app.get("/api/quotes", getQuote);
app.get("/api/dogs", getDog);
app.get("/api/dances", getDown)

app.listen(4000, () => console.log("Server running on 4000"));
