import { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css'; 

function Login({ loginUser }) {
  const [form, setForm] = useState({ username: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const result = loginUser(form.username, form.password);
    if (result.success) {
      alert(`Bienvenido, ${result.user.name} ${result.user.lastname}`);
    } else {
      alert(result.message);
    }
  };

  const handleShowPassword = () => {
    setShowPassword(prev => !prev);
  };

  return (
  <div className="login-container">
    <form onSubmit={handleLogin}>
      <h2>Iniciar sesión</h2>
      <input
        className="input"
        name="username"
        placeholder="Usuario"
        value={form.username}
        onChange={handleChange}
        required
      />
      <div className="password">
        <input
          className="input"
          name="password"
          type={showPassword ? 'text' : 'password'}
          placeholder="Contraseña"
          value={form.password}
          onChange={handleChange}
          required
        />
        <button
          type="button"
          className="input"
          onClick={handleShowPassword}
        >
          {showPassword ? 'Ocultar' : 'Mostrar'}
        </button>
      </div>
      <button className="input" type="submit">Entrar</button>
      <p>
        ¿No tienes una cuenta? <Link to="/register">Regístrate</Link>
      </p>
    </form>
  </div>
);

}

export default Login;
