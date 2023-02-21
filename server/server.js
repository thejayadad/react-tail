const PORT = process.env.PORT ?? 8000
const express = require("express");
const app = express();
const mongoose = require("mongoose");
require('dotenv').config();
const cors = require("cors");
const authRoutes = require("./routes/auth.js");
const { loginRequired, ensureCorrectUser } = require("./middleware/auth");
const messagesRoutes = require("./routes/message.js");
const Message = require("./models/Message");
const User = require("./models/User.js");
const bodyParser = require("body-parser");
const errorHandler = require("./handlers/error");

app.use(express.json());
app.use(cors());
app.use("/api/auth", authRoutes);
app.use(
    "/api/users/:id/messages",
    loginRequired,
    ensureCorrectUser,
    messagesRoutes
  );


const uri = process.env.ATLAS_URI;
mongoose.set('strictQuery', true);
mongoose.connect(uri, { useNewUrlParser: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB Connected");
})



app.get("/api/messages", loginRequired, async function(req, res, next) {
  try {
    let messages = await Message.find()
      .sort({ createdAt: "desc" })
      .populate("user", {
        username: true,
        profileImageUrl: true
      });
    return res.status(200).json(messages);
  } catch (err) {
    return next(err);
  }
});
app.use(function(req, res, next) {
  let err = new Error("Not Found");
  err.status = 404;
  next(err);
});

app.use(errorHandler);


app.listen(PORT, () => console.log(`Listening ${PORT}`))