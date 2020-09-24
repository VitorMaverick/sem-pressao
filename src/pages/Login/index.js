import React, { useState, FormEvent, useContext} from "react";
import { useHistory, Link } from 'react-router-dom';

import Input from "../../components/Input";
import'./styles.css';


import api from "../../services/api";

import {AuthContext} from "../../context/Auth"


export default function Login() {
  const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {signed, user, signIn} = useContext(AuthContext);
   
  
   function handleCreateClass(e) {
    e.preventDefault();
    
  // const  {setStore} =
    console.log(signed);
    
    signIn(email, password);
    console.log(signed);
    
    history.push('/');
    console.log(user);
    
  }

  return (
    <div id="page-login" className="container">
     
        <main>
            <form onSubmit={handleCreateClass}>
                <fieldset>
                    <legend>Fazer login</legend>

                    <Input 
                    name="email" 
                    label="Email" 
                    value={email} 
                    onChange={(e) =>{ setEmail(e.target.value)}}
                    />
                    <Input 
                    name="password" 
                    label="Password" 
                    value={password} 
                    onChange={(e) =>{ setPassword(e.target.value)}}
                    />
                    
                </fieldset>
            

                <footer>
                    <p>
                    
                    Importante! <br />
                    Preencha todos os dados
                    </p>
                    <button type="submit">
                    Entrar
                    </button>
                </footer>
            </form>

            <p>Não tem cadastro? </p>
            <Link to = "/register">Cadastre-se</Link>
      </main>
    </div>
  );
}


