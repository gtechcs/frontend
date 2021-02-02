const HttpStatus = require("http-status-codes");

var blogs = [{
    title : "Blog 1",
    body: "This is blog 1 body"
},
{
    title : "Blog 2",
    body: "This is blog 2 body"
} 
]

module.exports = {
    create(req, res) {
      blogs = [...blogs, req.body];
      res.status(HttpStatus.OK).json({
        message: "Success"
      });
    },
    get(req, res) {
        res.status(HttpStatus.OK).json({
          message: blogs
        });
    }
};
    