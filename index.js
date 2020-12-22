const Heroku = require('heroku-client')
const heroku = new Heroku({ token: "ecb97cc6-a003-419f-8788-5a5fe0c15310" })

// GET requests
heroku.get('/').then(apps => {
    // do something with apps

})

// POST requests
heroku.post('/apps').then(app => {})

// POST requests with body
heroku.post('/apps', {body: {name: 'intuition-trainer'}}).then(app => {})

// PATCH requests with body
heroku.patch('/apps/my-app', {body: {name: 'intuition-trainer-app'}}).then(app => {})

// DELETE requests
heroku.delete('/apps/my-old-app').then(app => {})