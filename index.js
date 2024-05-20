const express = require('express')
const path = require('path');
const app = express()
const port = 4000

// Create a custom middleware
// const customMiddleware = (req, res, next) => {
//     console.log(req)
//     next(); // when we are making multiple middleware and to run next middleware the when write next() 
// }

app.use(express.static(path.join(__dirname, "public")))
// app.use(customMiddleware)

// Passing a parameter
app.get('/hello/:name', (req, res) => {  // /hello/:name use to extract key value pair from the datavbase then we pass this type of parameter
  res.send('Hello World! ' + req.params.name)
})
app.get('/about', (req, res) => {
//   res.send('Hello Ashish!')
// res.sendFile(path.join(__dirname, 'index.html')
// res.status(500);
res.json({name: 'Ashish'});
})
 
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})

// https://google.com/?q=java&filterBy= 