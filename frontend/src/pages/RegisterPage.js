import React, { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"
import '../Register.css';
import Form from 'react-bootstrap/Form';

function RegisterPage() {
    const history=useNavigate();

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleSubmit(e){
        e.preventDefault();

        try{

            await axios.post("http://localhost:8000/Register",{
                username,email,password
            })
            .then(res=>{
                if(res.data=="exist"){
                    alert("User already exists")
                }
                else if(res.data=="User does not exist"){
                    history("/",{state:{id:username}})
                }
            })
            .catch(e=>{
                alert("wrong credentials")
                console.log(e);
            })

        }
        catch(e){
            console.log(e);

        }

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
      <button type = "submit">
        Register
      </button>
    </form>
      </div>
    );
}

export default RegisterPage

