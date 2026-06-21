class AppRes {
  constructor(message, statusCode = 200, data = null) {
    this.success = true;
    this.message = message;
    this.statusCode = statusCode;
    this.data = data;
  }

  static send(res, message, statusCode = 200, data = null) {
    const response = new AppRes(message, statusCode, data);
    if (!data) {
      return res.status(statusCode).json({
        success: response.success,
        message: response.message,
      });
    }
    return res.status(statusCode).json({
      success: response.success,
      message: response.message,
      data: response.data,
    });
  }
}

module.exports = AppRes;
