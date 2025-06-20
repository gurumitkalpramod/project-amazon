const express = require('express')
const cors = require('cors')
const app = express()
const ProductRoute = require("./app/products/product.routers")
const port = 5000
const userRoute = require('./app/users/user.route')
const dbConnect = require('./db/dbconnect')
 
app.use(cors())
app.use(express.json())
  
dbConnect();
app.use('/api/users',userRoute)
app.use("/api/products",ProductRoute)


app.get('/', (req, res) => {
  res.send('server is running ')
})

app.use((err,req,res,next) => {
  console.error(err.stack);

  res.status(err.statusCode ||500).json({
    success: false,
    message: err.message || 'intrenal Server Error',
  });
  
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
