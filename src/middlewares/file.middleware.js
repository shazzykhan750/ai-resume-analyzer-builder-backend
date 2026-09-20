const multer = require("multer");

const upload = multer({
  storage: multer.memoryStorage(),

  limits: {
    fileSize: 3 * 1024 * 1024, // 3 MB
  },

  fileFilter: (req, file, cb) => {
    if (file.mimetype !== "application/pdf") {
      const error = new Error("Only PDF resumes are supported.");
      error.statusCode = 400;
      error.code = "INVALID_FILE_TYPE";

      return cb(error);
    }

    cb(null, true);
  },
});

module.exports = upload;
