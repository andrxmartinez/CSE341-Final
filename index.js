const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDatabase = require("./database/connect");
const port = process.env.PORT || 8080;
const app = express();

const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("./swagger.json");

app
  
.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile))
  .use([cors(), bodyParser.json()])
  .use((req, res, next) => {
    console.log("Time: ", Date.now());
    next();
  })
  .use("/", require("./routes"));

app.listen(port, () => {
  console.log(
    `Application listening on http://127.0.0.1:${port} see API documentation on http://localhost:${port}/api-docs`
  );
});

connectDatabase().catch(console.dir);
