const mongoose = require('mongoose');

// const MONGO_URI = ''

mongoose.connect(MONGO_URI, {
  // options for the connect method to parse the URI
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // sets the name of the DB that our collections are part of
  dbName: 'starwars'
})
  .then(() => console.log('Connected to Mongo DB.'))
  .catch(err => console.log(err));

const Schema = mongoose.Schema;

const journalEntry = new Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  date: Date/*,
  tones: [
    {
      score: Number,
      tone_id: String,
      tone_name: String,
    },
  ],
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  }*/
});

// creats a model for the 'journal entry' collection that will be part of the export
const Entry = mongoose.model('entry', journalEntry);

// exports all the models in an object to be used in the controller
module.exports = {
  Entry
};