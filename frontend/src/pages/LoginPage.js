
import '../Register.css';
import { useState } from 'react';


function LogInPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    // Do something with the form data

  }

  return (
    <div className='registerForm'> 
         <h2>Login</h2>
  <form  onSubmit={handleSubmit}>
    <div class="user-box">
      <input type="text" value={username} onChange={(event) => setUsername(event.target.value)}/>
      <label>Username</label>
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
      Log In
    </a>
  </form>
    </div>
  );
  
}
export default LogInPage;