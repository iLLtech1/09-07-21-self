//Bring in express.
const express = require('express')

//in order to bring in a file, like our html doc, you will need to install the native node app `PATH`
const { join } = require('path')
//We will use HTTP verbs to call out our actions for the server. For this we will use
//GET POST PUT DELETE
//to join to the publixc folder we need to bring in express.
const app = express()


//start
//The server will look for any GET routes, then the pattern(ours is /test). For that responed by printing this string of HTML(Hello World)
// app.get('/test', (req, res) => {
//   res.send('<h1>Hello World.</h1>')
// })
//end

//start
//Now lets link and send out our HTML file
// app.get('/', (req, res) => {
//   res.sendFile(join(__dirname, 'index.html'))
// })

// app.get('/test', (req, res) => {
//   res.sendFile(join(__dirname, 'test.html'))
// })

//start
//Below will link to the public folder and its content.
app.use(express.static(join(__dirname, 'Public')))

const users = [
  {
    name: 'John Doe',
    age: 47
  },
  {
    name: 'Jane Doe',
    age: 48
  },
  {
    name: 'Jack Doe',
    age: 49
  }
]
// START: to retrieve individual user information using query WK6DY1&2 00:53:00
// http://localhost:3000/user?name=John Doe
// app.get('/user', (req, res) => {
//   const name = req.query.name 
//   const user = users.filter(user => user.name === name)[0]

//   res.json(user)
// })
//end

//start Now we will get data using Parameters instead of Query
//http://localhost:3000/user/John Doe
app.get('/user/:name', (req,res) => {
  const name = req.params.name 
  const user = users.filter(user => user.name === name)[0]

  res.json(user)
})


//START: The below get method is used to grab the array of users info, then we use res.json to send back the JS to the front end.
// app.get('/users', (req, res) => {
//   res.json(users)
// })
//end


//turn the server on and setting it to listen to events. This utilizes Local.host and port 3000
app.listen(3000)
//Two other common ports are 8080 and 3001

