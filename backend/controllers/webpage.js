const AppRes = require("../utils/AppRes");
const AppError = require("../utils/AppError");
const { connectService } = require("../services/connect");

// Contact-us form submission.
const connectController = async (req, res, next) => {
  try {
    const result = await connectService(req.body);
    AppRes.send(res, result.message, result.statusCode, result.data);
  } catch (err) {
    if (err instanceof AppError) {
      return res.status(err.statusCode || 400).json({
        success: false,
        message: err.message,
        data: err.data || null,
      });
    }
    next(err);
  }
};

module.exports = { connectController };
