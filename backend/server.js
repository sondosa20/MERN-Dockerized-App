const express = require('express');  //Framework pour creer des serveurs web en Node.js
const mongoose = require('mongoose'); //librairie pour interagir avec la base de données MongoDB
const bodyParser = require('body-parser');
require('dotenv').config();  //changement les variables d'environnement dans un fichier .env

const app = express();  // Initialisation de l'application Express
const PORT = process.env.PORT || 5000;  //500 port par defaut

app.use(bodyParser.json()); // Middleware(entre client et serveur) pour parser le JSON

// Connexion à la base de données MongoDB
//const mongoURI = process.env.MONGO_URI || 'mongodb://root:example@mongo:27017/mern_db'; // URL MongoDB avec Docker
 
// Connexion à la base de données MongoDB
const mongoURI = 'mongodb:/mongo:27017'; // URL MongoDB avec Docker

mongoose.connect(mongoURI, {user: "root", pass: "example", dbName: "mern_db" })
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.error("Could not connect to MongoDB", err));

// Exemple de modèle Mongoose 
const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const User = mongoose.model('User', UserSchema);

// Route de test pour la racine
app.get('/', (req, res) => {
  res.send('Backend is working!');
});

// Route pour ajouter un utilisateur (POST /api/users/add)
app.post('/api/users/add', async (req, res) => {
  const { name, email, password } = req.body;
  console.log('name:', name, 'email:', email, 'password:', password);
  try {
    const newUser = new User({ name, email, password });
    await newUser.save();
    res.status(201).json({ message: 'Utilisateur ajouté avec succès', user: newUser });
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de l\'ajout de l\'utilisateur', error });
  }
});

// Lancement du serveur
app.listen(PORT, () => {
  console.log(`Serveur backend démarré sur le port ${PORT}`);
});