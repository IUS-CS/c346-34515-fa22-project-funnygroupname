const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const routesUrls = require('./routes/routes')
const cors = require('cors')
const port = 4000

/**
 * Creates express object for running routes and listening for requests
 */
const run = express()

/**
 * Gets needed .env data (credentials) and connects to the mongodb database
 */
dotenv.config()
mongoose.connect(process.env.DATABASE_ADMIN_ACCESS, () =>console.log("Database has connected successfully :)"))

/**
 * Running express
 */
run.use(express.json())
run.use(cors())
run.use('/app', routesUrls)
run.listen(port, () => console.log("Server is running on port " + port))