const express = require("express");
const app = express();
const cors = require("cors");
const auth = require("./routes/auth.js");
const blog = require("./routes/blog.js");
const logo = require("./routes/logo.js");
const brand = require("./routes/brands.js");
const driver = require("./routes/driver.js");

const mongoose = require("mongoose");
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/", auth);
app.use("/blog", blog);
app.use("/logo", logo);
app.use("/brands", brand);
app.use("/driver", driver);
const CONNECTION_URL =
  "mongodb+srv://brainboxbd:brainboxbd@cluster0.7k23y.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;
mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connected Successfully");
  })
  .catch((error) => {
    console.log(error.message);
  });

app.listen(PORT, () => {
  console.log("server is running on port", PORT);
});
