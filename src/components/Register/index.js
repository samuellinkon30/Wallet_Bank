import React from "react";

const Register = () => {
    return(
        <div className="register">
        <h1>Register</h1>
        <form>
            <label>User</label>
            <input type="text"></input>
            <label>Email</label>
            <input type="text"></input>
            <label>Password</label>
            <input type="password"></input>
            <button>Register</button>
        </form>
    </div>
    )
}

export default Register;