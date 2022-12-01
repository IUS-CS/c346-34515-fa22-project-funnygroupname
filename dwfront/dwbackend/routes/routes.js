const express = require('express')
const router = express.Router()
const appointmentTemplateCopy  = require('../models/appointmentModels')
const usersTemplateCopy  = require('../models/signInModel')
const testTemplateCopy = require("../models/testModel")

router.post('/appointments',(request, response) =>{
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


router.post('/users',(request, response) =>{
    const userRequest  = new  usersTemplateCopy({
        username:request.body.username,
        password:request.body.password,
        privilege:request.body.privilege,
        firstName:request.body.firstName,
        lastName:request.body.lastName,
        dateJoined:request.body.dateJoined
    })
    userRequest.save()
        .then(data =>{
            response.json(data)
        })
        .catch(error => {
            response.json(error)
        })
})

router.post('/test',(request, response) =>{
    const testRequest  = new  testTemplateCopy({
        name:request.body.name,
        num:request.body.num
    })
    testRequest.save()
        .then(data =>{
            response.json(data)
        })
        .catch(error => {
            response.json(error)
        })
})

router.route("/fetch").get(function(req, res){
    kennel.find({}, function(err, result)  {
        if (err) {
            res.send(err)
        } else {
            res.send(result);
        }
    });
});

router.get("/", (req, res) =>
    res.status(200)
        .send({ message: "Hello from the server !"})
);


module.exports = router