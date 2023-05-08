
import '../Register.css';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
function RegisterPage() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    // Do something with the form data
    console.log('Form submitted:', { username, email, password });
  }

  return (
    <div className='registerForm'> 
         <h2>Register</h2>
  <form  onSubmit={handleSubmit}>
    <div class="user-box">
      <input type="text" value={username} onChange={(event) => setUsername(event.target.value)}/>
      <label>Username</label>
    </div>
   <div class="user-box">
      <input type="email" value={email} onChange={(event) => setEmail(event.target.value)}/>
      <label>Email</label>
    </div>
   <div class="user-box">
      <input type="password" value={password} onChange={(event) => setPassword(event.target.value)}/>
      <label>Password</label>
    </div>
    <a href="#">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Register
    </a>
  </form>
    </div>
  );
  
}

export default RegisterPage;