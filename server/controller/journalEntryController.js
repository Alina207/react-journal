const models = require('../models/journalEntry');

const journalEntryController = {};

journalEntryController.getAllEntries = (req, res, next) => {
  // find all journal entries in the db
  models.Entry.find({}).exec()
    .then(entriesDocs => {
      res.locals.entries = entriesDocs;
      next();
    })
    .catch(err => {
      const errObj = {
        log: err.log,
        message: { err: 'Error occurred in journalEntryController.getAllEntries.' }
      };
      next(errObj);
    });
};

journalEntryController.addEntry = (req, res, next) => {
  const { title, body, date } = req.body;
  // add a new entry to the db
  models.Entry.create({ title, body, date}).exec()
    .then(entryDoc => {
      res.locals.newEntry = entryDoc;
      next();
    })
    .catch(err => {
      const errObj = {
        log: err.log,
        message: { err: 'Error occurred in journalEntryController.addEntry.' }
      };
      next(errObj);
    });
};

module.exports = journalEntryController;