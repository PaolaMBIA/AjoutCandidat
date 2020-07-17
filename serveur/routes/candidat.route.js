const express = require('express');
const app = express();
const candidatRoute = express.Router();

// candidat model
let Candidat = require('../models/Candidat');

// Add candidat
candidatRoute.route('/create').post((req, res, next) => {
    Candidat.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Get All candidat
candidatRoute.route('/').get((req, res) => {
    Candidat.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get single candidat
candidatRoute.route('/read/:id').get((req, res) => {
    Candidat.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


module.exports = candidatRoute;