
const express = require("express")
const app = express()
const mongoose = require("mongoose")
const userRoute=require('./Routes/UsersMangRoutes')
const intervenantRoute = require ("./Routes/IntervenantsRoutes")
const authRoute=require("./Routes/AuthRoutes")
const dotenv = require("dotenv")
//import error middleware
const errorHandler = require("./Middleware/error")

dotenv.config()

app.use(express.json())

//middleware takes data from the body:
app.use(express.json())
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

//Routes for UserManagement, intervenants
app.use('/client',userRoute,intervenantRoute)
//Auth Routes
app.use("/auth", authRoute);

/* //redirect everything with /api/auth/something to AuthRoute
app.use('/auth', require('./Routes/AuthRoutes'))
//Acess to private Routes
app.use('/private', require('./Routes/PrivateRoutes'))
//error middleware (should be always the last  middleware added)
app.use(errorHandler)
  */
const port = 5000

mongoose.connect(process.env.CONNECT_DB, (error) => {
  if (error) {
    console.log("connexion to DB failed ")
  } else {
    console.log("database is connected")
  }
})
app.listen(port, (error) => {
  if (error) console.log("failed to run ")
  console.log(`server is running on port ${port}`)
})