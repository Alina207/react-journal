const express = require('express');
const journalEntryController = require('../controller/journalEntryController');
const router = express.Router();

router.get('/',
  journalEntryController.getAllEntries,
  (req, res) => res.status(200).json(res.locals.entries)
);

// router.post('/entry',
//   journalEntryController.addEntry,
//   (req, res) => res.status(200).json(res.locals.newEntry)
// );

module.exports = router;