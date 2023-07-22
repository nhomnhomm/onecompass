import React, { useState } from "react";
export const Signup = (props) => {
    const [username, setUserName] = useState('');
    const [pass, setPass] = useState('');
    const [email, setEmail] = useState('');
    const [cohort, setCohort] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className = "signup-container">
            <div className = "signup-description">
                <img src=".\logo-onecompass.svg" alt="Logo" className="logo"> </img>
                <p className="webName">ONECOMPASS</p>
                <p className='description'> "Once upon a time, there was a lovely web named OneCompass. It offered a personalized roadmap, tracking progress and efficient course planning. It empowered students to make informed decisions and stay on track for timely degree completion. Say goodbye to confusing course planning, join the adventure, and let OneCompass guide you to academic excellence!" </p>
            </div>
            <form onSubmit={handleSubmit} className="signup-form">
                <h2 className="signup-header">Sign up</h2>
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
                        placeholder="Choose your cohort"
                        name="cohort" />
                </div>
                <button type="submit"> Sign up</button>
                <p className="switch-page"> 
                    Have an account already? <a onClick={() => props.onFormSwitch('login')} href="./src/Login.jsx">Login</a>
                </p>
            </form>
        </div>
    )
}

export default Signup;