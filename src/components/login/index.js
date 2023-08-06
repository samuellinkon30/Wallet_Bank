import React from "react";

const Login = () => {
    return(
        <div className="login">
            <h1>Login</h1>
            <form>
                <label>User</label>
                <input type="text"></input>
                <label>Password</label>
                <input type="password"></input>
                <button>Login</button>
            </form>
        </div>
        
    )
}

export default Login;