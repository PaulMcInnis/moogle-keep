// Import express
const express = require('express')

// Import reminders-controller
const remindersRoutes = require('./../controllers/reminders-controller.js')

// Create router
const router = express.Router()

// Add route for GET request to retrieve all reminder
// In server.js, reminders route is specified as '/reminders'
// this means that '/all' translates to '/reminders/all'
router.get('/all', remindersRoutes.remindersAll)

// Add route for POST request to create new reminder
// In server.js, reminders route is specified as '/reminders'
// this means that '/create' translates to '/reminders/create'
router.post('/create', remindersRoutes.remindersCreate)

// Add route for PUT request to delete specific reminder
// In server.js, reminders route is specified as '/reminders'
// this means that '/delete' translates to '/reminders/delete'
router.put('/delete', remindersRoutes.remindersDelete)

// Add route for PUT request to reset remindershelf list
// In server.js, reminders route is specified as '/reminders'
// this means that '/reset' translates to '/reminders/reset'
router.put('/reset', remindersRoutes.remindersReset)

// Export router
module.exports = router
