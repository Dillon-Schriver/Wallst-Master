const User = require('../models/userModel');

const userController = {};

/**
* getAllUsers - retrieve all users from the database and stores it into res.locals
* before moving on to next middleware.
*/
userController.getAllUsers = async (req, res, next) => {
  await User.find({}, (err, users) => {
    // if a database error occurs, call next with the error message passed in
    // for the express global error handler to catch
    if (err) return next('Error in userController.getAllUsers: ' + JSON.stringify(err));
    
    // store retrieved users into res.locals and move on to next middleware
    res.locals.users = users;
    return next();
  });
};

/**
* createUser - create and save a new User into the database.
*/
userController.createUser = async (req, res, next) => {
  // write code here
  try {
    const { username, password } = req.body;
    await User.create({ username: username, password: password }, (err, val) => {
      
      if (err){
        return next(err);
      } else {
        // we want to push to MongoDB in this step
        res.redirect('/secret'); // optional status
        return next()
      }
    });
  } catch (error) {
    // need to render error message
    return next(error);
  }
};

/**
* verifyUser - Obtain username and password from the request body, locate
* the appropriate user in the database, and then authenticate the submitted password
* against the password stored in the database.
*/
userController.verifyUser = async (req, res, next) => {
  // write code here
  const { username, password } = req.body;
  console.log(username, password);
  await User.count({ username: username, password: password}, (err, count) =>{
    if (err || count < 1) res.redirect('/signup');
    else return next();
  });

}
module.exports = userController;