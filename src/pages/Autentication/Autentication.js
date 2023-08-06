import React, { useEffect, useState } from "react";


const Autentication = () => {

    // const [logado, setLogado] = useState(false);

    // const [loginRegister, setloginRegister] = useState(true);

    // const [action, setAction] = useState('Register');

    // function verifyLoged()
    // {       
    //    if(localStorage.getItem("key")==="logado"){
    //     return true
    //    } else {
    //     return false
    //    }
    // }

    // function handleRegister(){
    //     setloginRegister(!loginRegister)
    //     if(action === 'Login'){
    //         setAction('Register');
    //     } else {
    //         setAction('Login')
    //     }

    // }

    // useEffect(() => {

    //     if (verifyLoged()===true) {

    //         console.log('Entrou')
    //       window.location.href = '/dashboard'; // Redireciona para a página de dashboard
    //     } else {
    //         console.log('N Entrou')

    //         setLogado(false);
    //     }
    //   },[]);

    return(
        <div className="Autentication">

            {/* {!logado && loginRegister && (
            <Login></Login>
            )}

            {!logado && !loginRegister && (
            <Register></Register>
            )}

            <button onClick={handleRegister}>{action}</button> */}

            <h1>Autentication</h1>
        </div>
    )
}

export default Autentication;