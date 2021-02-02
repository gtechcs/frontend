const welcome = require("../controllers").welcomeModule.welcome;
const error = require("../controllers").welcomeModule.error;
const blogs = require("../controllers").blogs;


module.exports = (app, express) => {
    app.use("/api/v1/error", express.Router(), error);
    app.get("/api/v1/blogs", express.Router(), blogs.get);
    app.post("/api/v1/blogs", express.Router(), blogs.create);

    app.use("/api/v1/", express.Router(), welcome);
};
  