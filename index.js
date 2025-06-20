const express = require('express')
const cors = require('cors')
const app = express()

const port = 5000
const userRoute = require('./app/users/user.route')
const dbConnect = require('./db/dbconnect')
 
app.use(cors())
app.use(express.json())
  
dbConnect();
app.use('/api/users',userRoute)
app.get('/', (req, res) => {
  res.send('server is running ')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
