const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const authRouter = require("./routes/auth.routes");
const interviewRouter = require("./routes/interview.routes");

const app = express();

// ===============================
// Middlewares
// ===============================

app.use(express.json());

app.use(cookieParser());

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);

// ===============================
// Routes
// ===============================

app.use("/api/auth", authRouter);

app.use("/api/interview", interviewRouter);

// ===============================
// Error Handler
// ===============================

app.use((err, req, res, next) => {
  console.error(err);

  if (res.headersSent) {
    return next(err);
  }

  if (err.code === "LIMIT_FILE_SIZE") {
    return res.status(413).json({
      message: "Resume file is too large. Maximum size is 3 MB.",
    });
  }

  return res.status(err.statusCode || 500).json({
    message: err.message || "Internal server error.",
  });
});

module.exports = app;
