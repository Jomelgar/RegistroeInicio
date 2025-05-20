import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import Register from './Register.jsx';
import Login from './Login.jsx';

function App() {
  const [users, setUsers] = useState(new Map());

  const registerUser = (userData) => {
    if (users.has(userData.username)) {
      return { success: false, message: 'El usuario ya existe' };
    }
    const newUsers = new Map(users);
    newUsers.set(userData.username, userData); // Guarda todo el objeto
    setUsers(newUsers);
    return { success: true };
  };

  const loginUser = (username, password) => {
    const user = users.get(username);
    if (!user) return { success: false, message: 'Usuario no encontrado' };
    if (user.password !== password) return { success: false, message: 'Contraseña incorrecta' };
    return { success: true, user };
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />}/>
        <Route path="/register" element={<Register registerUser={registerUser} />} />
        <Route path="/login" element={<Login loginUser={loginUser} />} />
      </Routes>
    </Router>
  );
}

export default App;