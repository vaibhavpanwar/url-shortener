const express = require("express");
const app = express();
const connectDB = require("./config/db");
const path = require("path");
//cors
var cors = require("cors");

app.use(cors());
//connect databse
connectDB();

//init middleware
app.use(express.json({ extended: false }));

//define routes
app.use("/", require("./routes/index"));
app.use("/api/url", require("./routes/url"));

// Serve static assets in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
}

const PORT = 5000 || process.env.PORT;

app.listen(PORT, (req, res) => {
  console.log(`Server RUnning on ${PORT}`);
});
