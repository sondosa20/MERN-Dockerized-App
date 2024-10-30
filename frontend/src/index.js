import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Import the App component from FirstMernApp/frontend/src/App.js

//Rend l'app App dans le div (conteneur) avec l'id root dans le fichier index.html
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
