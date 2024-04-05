const mongoose = require("mongoose");
const express = require("express");
const connectDB = require("./config/db");
const cookieParser = require("cookie-parser");
const path = require("path");

const app = express();

app.use((req, res, next) => {
  // Set the Access-Control-Allow-Origin header to the origin of your frontend application
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");

  // Allow credentials for requests
  res.setHeader("Access-Control-Allow-Credentials", "true");

  // Set allowed headers for requests with credentials
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );

  // Set allowed methods
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );

  // Pass the request to the next middleware
  next();
});

connectDB();

// init middleware
app.use(express.json({ extended: false }));

app.use(cookieParser());

app.use("/api", require("./routes/User"));
app.use("/api/Order", require("./routes/Order"));
app.use("/api/Wishlist", require("./routes/WishList"));
app.use("/api/Shoping", require("./routes/Shopping"));
app.use("/api/RegAdmin", require("./routes/RegAdmin"));
app.use("/api/admin/login", require("./routes/Admin"));
app.use("/api/admin/Products", require("./routes/Products"));
app.use("/api/admin/", require("./routes/AdminPost"));
app.use("/api/Address/", require("./routes/Address"));
app.use("/api/Stripe/", require("./routes/stripe"));

// Serve Static assets in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("font/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "font", "build", "index.html"));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
