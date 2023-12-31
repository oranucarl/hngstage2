const express = require('express');
const bodyParser = require('body-parser');
const userRouter = express.Router();
userRouter.use(bodyParser.json());

const Users = require('../models/users');
 
userRouter.route('/api') 
.get(( req, res, next) => { 
    Users.find({})
    .then((users) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(users);               //res users to the client in the body of the respond in json format
    }, (err) => next(err))
    .catch((err) => next(err));
})
.post((req ,res , next) => {
    // POST Validation
    if (typeof req.body.name != "string") (
        res.status(400).json({
            status: "error", 
            message: "Invalid Name Type"})
    )
    else(
        Users.create(req.body)
        .then((user) => {
            console.log('Person Created ', user);
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(user)
        }, (err) => next(err))
        .catch((err) => next(err))
    )
});

userRouter.route('/api/:user_Id')
.get((req, res, next) => { 
    Users.findById(req.params.user_Id)
    .then((user) => {
        if (user === null) {
            // User not found, so throw an error
            const err = new Error('Person not found');
            err.status = 404; // Set the HTTP status code to 404 (Not Found)
            return next(err);
        }
        console.log('Person Created ', user);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(user);
    })
    .catch((err) => next(err));
})
.put((req, res, next) => { 
    Users.findByIdAndUpdate(req.params.user_Id, {
        $set: req.body
    }, {
        new: true
    })
    .then((user) => {
        if (user === null) {
            // User not found, so throw an error
            const err = new Error('Person not found');
            err.status = 404; // Set the HTTP status code to 404 (Not Found)
            return next(err);
        }
        console.log('User updated ', user);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(user);
    })
    .catch((err) => next(err));
})
.delete((req, res, next) => {
    Users.findByIdAndRemove(req.params.user_Id)
    .then((resp) => {
        if (resp === null) {
            // User not found, so throw an error
            const err = new Error('Person not found');
            err.status = 404; // Set the HTTP status code to 404 (Not Found)
            return next(err);
        }
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    })
    .catch((err) => next(err));
});
module.exports = userRouter;