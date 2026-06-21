const mongoose = require("mongoose");

/**
 * Connects to MongoDB using DATABASE_URL from the environment.
 * The DB is only used to log contact-form submissions (Visitor collection),
 * so a missing/unavailable DB is non-fatal — the API still sends emails.
 */
const connectDB = async () => {
  if (!process.env.DATABASE_URL) {
    console.warn(
      "[db] DATABASE_URL not set — contact submissions will be emailed but not stored.",
    );
    return;
  }
  try {
    await mongoose.connect(process.env.DATABASE_URL, { family: 4 });
    console.log("[db] Connected to MongoDB");
  } catch (err) {
    console.error("[db] Failed to connect to MongoDB:", err.message);
  }
};

module.exports = { connectDB };
