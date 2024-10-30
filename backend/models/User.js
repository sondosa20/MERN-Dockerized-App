const mongoose = require('mongoose');

// Définition du schéma d'utilisateur 
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
}, { timestamps: true }); //Ajout des champs createdAt et updatedAt automatiquement

module.exports = mongoose.model('User', userSchema);
