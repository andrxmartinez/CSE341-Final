const express = require("express");
const session = require('express-session');
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDatabase = require("./database/connect");
const port = process.env.PORT || 8080;
const app = express();
const passport = require('passport');
const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("./swagger.json");
require('./authentication/auth');

function isLoggedIn(req, res, next) {
  req.user ? next() : res.sendStatus(401);
}

app.use(session({ secret: process.env.SECRET }));
app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req, res) => {
  res.send(
    '<div style="height: 100vh; align-items: center; display: flex; justify-content: center;"><div style="font-family: sans-serif; background-color: #F0F0F0; height: 50px; border: 2px solid gray; border-radius: 10px; width: 200px; margin: 0 auto; align-items: center; display: flex; justify-content: center;"><a style="text-decoration: none" href="/auth/google">Sign In</a></div></div>'
  );
});

app.get(
  '/auth/google',
  passport.authenticate('google', { scope: ['email', 'profile'] })
);

app.get(
  '/google/callback',
  passport.authenticate('google', {
    successRedirect: '/api-docs',
    failureRedirect: '/auth/failure',
  })
);

app.get('/auth/failure', (req, res) => {
  res.send('Authentication Failed');
});

app.get('/logout', (req, res, next) => {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    req.session.destroy();
    res.redirect('/');
  });
});

app
  // .use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile))
  .use([cors(), bodyParser.json()])
  .use((req, res, next) => {
    console.log("Time: ", new Date().toISOString().replace('T', ' ').substring(0, 19));
    next();
  })
  .use("/", isLoggedIn, require("./routes"));

process.on('uncaughtException', (err, origin) => {
  console.log(
    process.stderr.fd,
    `Caught exception: ${err}\n` + `Exception origin: ${origin}`
  );
});

app.listen(port, () => {
  console.log(
    `Application listening on http://127.0.0.1:${port} see API documentation on http://localhost:${port}/api-docs`
  );
});

connectDatabase().catch(console.dir);
