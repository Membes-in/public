const express = require("express");
const cors = require("cors");
require("dotenv").config();

const { connectDB } = require("./config/connectDB");
const webpageRoutes = require("./routes/webpage");

const app = express();
const PORT = process.env.PORT || 8080;

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS — allow the homepage frontend origin(s). Set FRONTEND_URL (comma-separated
// for multiple) in .env. Falls back to "*" so local dev works out of the box.
const allowedOrigins = (process.env.FRONTEND_URL || "")
  .split(",")
  .map((o) => o.trim())
  .filter(Boolean);

app.use(
  cors({
    origin: allowedOrigins.length ? allowedOrigins : "*",
    credentials: true,
  }),
);

// Health check
app.get("/", (req, res) => {
  res.status(200).send("Membes homepage API is running :-)");
});

// Routes — mounted to mirror the original API path.
app.use("/manager/webpage", webpageRoutes);

// Centralised error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.statusCode || 500).json({
    success: false,
    message: err.message || "Something went wrong",
  });
});

app.listen(PORT, () => {
  console.log(`Membes homepage API running on port ${PORT}`);
});
