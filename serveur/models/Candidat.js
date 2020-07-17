const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Candidat = new Schema({
   Nom: {
      type: String
   },

   Prenom: {
    type: String
   },

}, {
   collection: 'candidat'
})

module.exports = mongoose.model('Candidat', Candidat)