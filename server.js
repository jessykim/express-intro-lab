// import modules

import express from 'express'

// Create Express app

const app = express()

// Configure the app (app.set)



// Mount Middleware (app.use)



// Mount routes

// app.get('/', function(req, res) {
//   res.send('<h1>Hello World!</h1>')
// })

// app.get('/bye', function(req, res) {
//   res.send('<h2>Goodbye World!</h2>')
// })

// Tell the app to listen on port 3000

app.listen(4000, function() {
  console.log('Listening on port 4000')
})