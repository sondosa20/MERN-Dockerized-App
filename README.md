# First MERN App

## Description
This is a basic MERN (MongoDB, Express, React, Node.js) application.

## Prerequis
- Docker installé sur votre machine.
- Docker Compose (généralement inclus avec Docker).

## Features
- Backend API with Node.js, Express, and MongoDB.
- Frontend with React.

## Cloner le projet
git clone https://github.com/sondosa20/firstMernApp.git

## Lancer l'app
- cd backend : npm install pour installer les dependences
- Lancer docker-compose up --build (docker-compose down -v &&  docker-compose build && docker-compose up -d) pour démarrer l'application (construire les images docker pour le frontend, le backend et la base de données, et lie les ports locaux pour permettre l'acces).
- docker ps : pour verifier l'execution 
- Tester l'API Backend, ouvrez un nouveau terminal et executer la commande: curl http://localhost:5000
- Ajouter un utilisateur (test d'envoi de données): Envoi d'une requete POST pour ajouter un utilisateur dans la base de données MongoDB: 
curl -X POST http://localhost:5000/api/users/add -H "Content-Type: application/json" -d '{"name": "Sondos", "email": "sondosa@gmail.com", "password": "hahaha"}'
- Verifier les données dans la base de données: 
 - 1. Accédez au conteneur MongoDB: docker exec -it firstmernapp-mongo-1 mongo
 - 2. Dans le console MongoDB:
    use mern_db
    db.users.find().pretty()


## Accéder à l'application
Le frontend sera disponible à l'adresse: http://localhost:3000.
Le backend sera disponible à l'adresse: http://localhost:5000.


## Interaction avec la base de données: -since je suis débutante avec MongoDB hihih
- show dbs : Verifier les bases de données
- use mern_db : selectionner la base de données
- show collecions: Lister les collections
- db.users.find().pretty() : Trouver tous les users 

## Commandes Utiles: 
- Arrêter les conteneurs : docker-compose down
- Recréer les conteneurs avec nettoyage des volumes : 
    docker-compose down -v
    docker-compose up --build