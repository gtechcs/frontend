const welcome = require("../controllers").welcomeModule.welcome;
const error = require("../controllers").welcomeModule.error;


module.exports = (app, express) => {
    app.use("/api/v1/error", express.Router(), error);

    app.use("/api/v1/", express.Router(), welcome);
};
  