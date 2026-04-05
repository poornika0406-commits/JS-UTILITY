const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

// ✅ MongoDB connection
mongoose.connect("mongodb+srv://ADMIN16:Admin%40123@cluster0.nic8vhe.mongodb.net/blogDB?retryWrites=true&w=majority")
.then(() => console.log("MongoDB connected ✅"))
.catch(err => console.log(err));

// Test route
app.get("/", (req, res) => {
  res.send("Server is running 🚀");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});