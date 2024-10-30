const mongoose = require('mongoose');  // Import de Mongoose 

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('Database connection error:', error);
    process.exit(1); // Arrêt du processus en cas d'erreur de connexion
  }
};

module.exports = connectDB;  // Exportation de la fonction
