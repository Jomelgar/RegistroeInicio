import { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';


function Register({ registerUser }) {
  const [form, setForm] = useState({
    name: '',
    lastname: '',
    age: '',
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const result = registerUser(form);
    if (result.success) {
      alert('Registro exitoso');
      setForm({ name: '', lastname: '', age: '', username: '', password: '' });
    } else {
      alert(result.message);
    }
  };
return (
  <div className="login-container">
    <form className="login-form" onSubmit={handleRegister}>
      <h2>Registro</h2>
      <input name="name" placeholder="Nombre" value={form.name} onChange={handleChange} required />
      <input name="lastname" placeholder="Apellido" value={form.lastname} onChange={handleChange} required />
      <input name="age" type="number" placeholder="Edad" value={form.age} onChange={handleChange} required />
      <input name="username" placeholder="Usuario" value={form.username} onChange={handleChange} required />
      <input name="password" type="password" placeholder="Contraseña" value={form.password} onChange={handleChange} required />
      <button type="submit">Registrarse</button>
      <p>¿Ya tienes una cuenta? <Link to="/login">Inicia sesión</Link></p>
    </form>
  </div>
);
}

export default Register;
