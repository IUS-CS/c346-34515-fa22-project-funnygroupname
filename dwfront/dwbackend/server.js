const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const routesUrls = require('./routes/routes')
const cors = require('cors')
const port = 4000

const run = express()


dotenv.config()
mongoose.connect(process.env.DATABASE_ADMIN_ACCESS, () =>console.log("Database has connected successfully :)"))


run.use(express.json())
run.use(cors())
run.use('/app', routesUrls)
run.listen(port, () => console.log("Server is running on port " + port))