const express = require('express');
const { getUsers, createUser } = require('../controllers/userController');
const router = express.Router(); // Création d'un routeur Express

// Définition des routes
router.get('/', getUsers); //route pour récupérer tous les utilisateurs
router.post('/', createUser);

module.exports = router; // Exportation du routeur
