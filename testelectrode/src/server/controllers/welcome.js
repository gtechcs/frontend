const HttpStatus = require("http-status-codes");

module.exports = {
    welcome(req, res) {
      res.status(HttpStatus.OK).json({
        message: "Welcome to the API!",
        env: process.env.NODE_ENV || "development"});
    },
    error(req, res) {
        res.status(HttpStatus.IM_A_TEAPOT).json({
          message: "Error in the API!",
          env: process.env.NODE_ENV || "development"});
    }
};
    