const PORT = process.env.PORT ?? 8000
const express = require("express");
const app = express();
const mongoose = require("mongoose");
require('dotenv').config();
const cors = require("cors");
const authRoutes = require("./routes/auth.js");
const { loginRequired, ensureCorrectUser } = require("./middleware/auth");


app.use(express.json());
app.use(cors());
app.use("/api/auth", authRoutes);
app.use(
    "/api/users/:id/messages",
    loginRequired,
    ensureCorrectUser,

  );

const uri = process.env.ATLAS_URI;
mongoose.set('strictQuery', true);
mongoose.connect(uri, { useNewUrlParser: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB Connected");
})

app.get("/notes", async(req, res) => {
    try {

    } catch (error) {
        console.log(error);
    }
})




app.listen(PORT, () => console.log(`Listening ${PORT}`))