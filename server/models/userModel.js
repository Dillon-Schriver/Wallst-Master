const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MONGO_URI = 'mongodb+srv://DS:scout@cluster0.mfjbk.mongodb.net/users?retryWrites=true&w=majority';

mongoose.connect(MONGO_URI, {
    // options for the connect method to parse the URI
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // sets the name of the DB that our collections are part of
    dbName: 'users'
  })
    .then(() => console.log('Connected to Mongo DB.'))
    .catch(err => console.log(err));

const userSchema = new Schema({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true}
  });

module.exports = mongoose.model('User', userSchema);