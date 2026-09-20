const express = require("express")
const cookieParser = require("cookie-parser")
const cors = require("cors")

<<<<<<< HEAD
const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(cors({
=======
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
>>>>>>> e066ff9 (security: add authentication rate limiting)
    origin: "http://localhost:5173",
    credentials: true
}))

<<<<<<< HEAD
/* require all the routes here */
const authRouter = require("./routes/auth.routes")
const interviewRouter = require("./routes/interview.routes")


/* using all the routes here */
app.use("/api/auth", authRouter)
app.use("/api/interview", interviewRouter)
=======
// ===============================
// Routes
// ===============================

app.use("/api/auth", authRouter);

app.use("/api/interview", interviewRouter);
>>>>>>> e066ff9 (security: add authentication rate limiting)

// ===============================
// Error Handler
// ===============================

app.use((err, req, res, next) => {
    console.error(err)

    if (res.headersSent) {
        return next(err)
    }

    res.status(err.statusCode || 500).json({
        message: err.message || "Internal server error."
    })
})

<<<<<<< HEAD
=======
  return res.status(err.statusCode || 500).json({
    message: err.message || "Internal server error.",
  });
});
>>>>>>> e066ff9 (security: add authentication rate limiting)

module.exports = app