import React, { useEffect, useState } from "react";
import './index.css';

const Login = () => {

    const [nome, setNome] =  useState('');
    const [senha, setSenha] =  useState('');

    function handleSubmit(event){
        event.preventDefault();
        setNome(event.target[0].value);
        setSenha(event.target[1].value);
        redirect();
    }    
    function redirect(){
        if(nome==='samuel' && senha ==='samuel'){
            window.location.href = '/dashboard'; 
        }
        else {
            alert('Credências Incorretas');
        }
    }
    function handleChange(event){
        setNome(event.target.value);

    }
    return(
        <div className="login">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div className="box_form">
                    <label className="box_form_label">User:</label>
                    <input data-testid="input_name" className="box_form_input" value={nome} onChange={handleChange} type="text"></input>
                </div>
                
                <div className="box_form">
                    <label className="box_form_label">Password:</label>
                    <input data-testid="input_password" className="box_form_input" type="password"></input>
                </div>
                <input className="box_form_submit" type="submit" value="Logar"/>
            </form>
        </div>
        
    )
}

export default Login;