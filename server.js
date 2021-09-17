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




//turn the server on and setting it to listen to events. This utilizes Local.host and port 3000
app.listen(3000)
//Two other common ports are 8080 and 3001

