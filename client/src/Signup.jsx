import React, { useState } from "react";
export const Signup = () => {
    const [username, setUserName] = useState('');
    const [pass, setPass] = useState('');
    const [email, setEmail] = useState('');
    const [cohort, setCohort] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username">Username</label>
                <input 
                    value={username}
                    onChange={(e) => setUserName(e.target.value)}
                    type="username" 
                    id="username" 
                    name="username" />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input 
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                    type="password" 
                    id="password" 
                    name="password" />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email" 
                    id="email" 
                    name="email" />
            </div>
            <div>
                <label htmlFor="cohort">Cohort</label>
                <input 
                    value={cohort}
                    onChange={(e) => setCohort(e.target.value)}
                    type="cohort" 
                    id="cohort" 
                    name="cohort" />
            </div>
            <button type="submit"> Sign up</button>
            <p> 
                Have an account already? <a href="./src/Login.jsx">Login</a>
            </p>

        </form>
    )
}

export default Signup;