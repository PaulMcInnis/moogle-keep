// Import database
const knex = require('./../db')

// Retrieve all reminders
exports.remindersAll = async (req, res) => {
  // Get all reminders from database
  knex
    .select('*') // select all records
    .from('reminders') // from 'reminders' table
    .then(userData => {
      // Send reminders extracted from database in response
      res.json(userData)
    })
    .catch(err => {
      // Send a error message in response
      res.json({ message: `There was an error retrieving reminders: ${err}` })
    })
}

// Create new reminder
exports.remindersCreate = async (req, res) => {
  // Add new reminder to database
  knex('reminders')
    .insert({ // insert new record, a reminder
      'author': req.body.author,
      'title': req.body.title,
      'pubDate': req.body.pubDate,
      'rating': req.body.rating
    })
    .then(() => {
      // Send a success message in response
      res.json({ message: `Reminder \'${req.body.title}\' by ${req.body.author} created.` })
    })
    .catch(err => {
      // Send a error message in response
      res.json({ message: `There was an error creating ${req.body.title} reminder: ${err}` })
    })
}

// Remove specific reminder
exports.remindersDelete = async (req, res) => {
  // Find specific reminder in the database and remove it
  knex('reminders')
    .where('id', req.body.id) // find correct record based on id
    .del() // delete the record
    .then(() => {
      // Send a success message in response
      res.json({ message: `Reminder ${req.body.id} deleted.` })
    })
    .catch(err => {
      // Send a error message in response
      res.json({ message: `There was an error deleting ${req.body.id} reminder: ${err}` })
    })
}

// Remove all reminders on the list
exports.remindersReset = async (req, res) => {
  // Remove all reminders from database
  knex
    .select('*') // select all records
    .from('reminders') // from 'reminders' table
    .truncate() // remove the selection
    .then(() => {
      // Send a success message in response
      res.json({ message: 'Reminders list cleared.' })
    })
    .catch(err => {
      // Send a error message in response
      res.json({ message: `There was an error resetting reminder list: ${err}.` })
    })
}
