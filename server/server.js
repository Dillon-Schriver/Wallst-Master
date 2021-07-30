const path = require('path');
const express = require('express');
const app = express();
const PORT = 3000;
const cors = require('cors');


// require routers section TODO
const apiRouter = require('./routes/api.js');
const userRouter = require('./routes/users.js');
const bodyParser = require('body-parser');

// handle requests for static files
// app.use(express.static(path.resolve(__dirname, '../dist'))); 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());


// define route handlers here
// app.use('/api', apiRouter);

// sign up / login post
app.use('/users', userRouter);


// catch-all route handler for anything unknown
app.use('*', (req, res) => {
    return res.sendStatus(404);
});

/**
 * configire express global error handler
 * @see https://expressjs.com/en/guide/error-handling.html#writing-error-handlers
 */
 app.use((err,req,res,next) => {
    let defaultErr = {
      log: 'Express error handler caught unknown middleware error',
      status: 400,
      message: { err: 'An error occurred' }, 
    };
    let errorObj = Object.assign(defaultErr,err);
    console.log(errorObj.log);
    res.locals.message = errorObj.message;
    console.log('ERROR-YO:', err);
    const errorStatus = errorObj.status || 500;
    return res.status(errorStatus).send(res.locals.message);
  });

  
  // start server
  app.listen(PORT, () => {
      console.log(`Server listening on port: ${PORT} for WallStLeetCode`);
  })

  module.exports = app;

