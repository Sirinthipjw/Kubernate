const cors = require("cors");
const bodyParser = require("body-parser");

function Middleware(app, express) {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  const corsOptions = {
    origin: "*",
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  };
  app.use(cors(corsOptions));
}

module.exports = Middleware;
