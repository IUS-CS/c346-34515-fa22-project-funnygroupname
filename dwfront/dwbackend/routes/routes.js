const express = require('express')
const router = express.Router()
const appointmentTemplateCopy  = require('../models/appointmentModels')

router.post('/app',(request, response) =>{
    const appointmentRequest  = new  appointmentTemplateCopy({
        fullName:request.body.fullName,
        email:request.body.email,
        operation:request.body.operation,
        cost:request.body.cost,
        date:request.body.date
    })
    appointmentRequest.save()
        .then(data =>{
            response.json(data)
        })
        .catch(error => {
            response.json(error)
        })
})


module.exports = router