const express = require("express");
const mongoose = require("mongoose");

const auth = require("./routes/auth");

const isAuth = require("./middleware/is-auth");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/protected", isAuth, (req, res, next) => {
  res.status(200).json({ message: "Protected route success!" });
});

app.use("/auth", auth);

const start = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://sia212007:GMFRxaPBFUE99DWt@cluster1.pdai3ka.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Cluster1"
    );
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  } catch (error) {}
};

start();
