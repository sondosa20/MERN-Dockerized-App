const User = require('../models/User');

//fonction pour récupérer tous les utilisateurs
exports.getUsers = async (req, res) => {
  try {
    const users = await User.find(); // Récupération de tous les utilisateurs
    res.json(users); // Envoi de la réponse au format JSON
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


//fonction pour créer un utilisateur
exports.createUser = async (req, res) => {
  const user = new User(req.body); // Création d'un nouvel utilisateur avec les données reçues
  try {
    const newUser = await user.save();
    res.status(201).json(newUser); // Envoi de la réponse avec le statut 201 (created)
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
