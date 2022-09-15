const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const routesUrls = require('./routes/routes')
const cors = require('cors')

const run = express()


dotenv.config()
mongoose.connect(process.env.DATABASE_ADMIN_ACCESS, () =>console.log("Database has connected successfully :)"))

run.use(express.json())
run.use(cors())
run.use('/app', routesUrls)
run.listen(4000, () => console.log("Server is running"))