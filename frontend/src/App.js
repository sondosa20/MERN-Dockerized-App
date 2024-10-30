import React, { useState, useEffect } from 'react';

//component principal de la application
function App() {
  const [users, setUsers] = useState([]);  //useState est un Hook qui permet d'ajouter l'état local à un composant fonctionnel, la permet de stocker les users 

  useEffect(() => {
    //fetch est une fonction qui permet de faire des requêtes HTTP: là c est l'appel a l'API pour récupérer les users au chargement du composant
    fetch('/api/users')
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error('Error fetching users:', error));
  }, []);

  return (
    <div className="App">
      <h1>User List</h1>
      <ul>
        {users.map((user) => (
          <li key={user._id}>{user.name}</li> //Afficher chaque user
        ))}
      </ul>
    </div>
  );
}

export default App;
