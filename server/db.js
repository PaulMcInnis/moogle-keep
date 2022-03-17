// Import path module
const path = require('path')

// Get the location of database.sqlite file
const dbPath = path.resolve(__dirname, 'db/database.db')

// Create connection to SQLite database
const knex = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: dbPath,
  },
  useNullAsDefault: true
})

// Create a table in the database called "reminders"
knex.schema
  // Make sure no "reminders" table exists before trying to create new
  .hasTable('reminders')
    .then((exists) => {
      if (!exists) {
        // If no "reminders" table exists
        // create new, with "id", "author", "title",
        // "pubDate" and "rating" columns
        // and use "id" as a primary identification
        // and increment "id" with every new record (reminder)
        return knex.schema.createTable('reminders', (table)  => {
          table.increments('id').primary()
          table.integer('text')
          table.string('title')
          table.string('date')
          table.integer('completed')
        })
        .then(() => {
          // Log success message
          console.log('Table \'reminders\' created')
        })
        .catch((error) => {
          console.error(`There was an error creating table: ${error}`)
        })
      }
    })
    .then(() => {
      // Log success message
      console.log('done')
    })
    .catch((error) => {
      console.error(`There was an error setting up the database: ${error}`)
    })

// // Just for debugging purposes:
// // Log all data in "reminders" table
// knex.select('*').from('reminders')
//   .then(data => console.log('data:', data))
//   .catch(err => console.log(err))

// Export the database
module.exports = knex
