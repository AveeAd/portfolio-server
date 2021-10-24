const express = require("express");
require("dotenv").config();
const cors = require("cors");
const connectDB = require("./config/connectDB");
const app = express();
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 5000;

connectDB();

const { feedbackRoute } = require("./routes/feedbackRoute");
const blogsRoute = require("./routes/blogsRoute");

app.post("/feedback", feedbackRoute);
app.use("/blogs", blogsRoute);

app.listen(port, () => console.log(`server listening on port ${port}`));
