const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const setupRoutes = require("./routes/routes");

const app = express()
const port = 3000


app.use(bodyParser.json());
app.use(cors()); 

setupRoutes(app, express);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})