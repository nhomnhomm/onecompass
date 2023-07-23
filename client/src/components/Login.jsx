import { useState } from 'react'
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    let navigate = useNavigate(); 
    const signupLink = () =>{ 
        navigate('signup');
    }

    const handleLogIn = (e) => {
        e.preventDefault();
        console.log();
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-8 justify-content-center align-self-center">
                Once upon a time, there was a lovely web named OneCompass. 
                It offered a personalized roadmap, tracking progress and efficient course planning. 
                It empowered students to make informed decisions and stay on track for timely degree completion. 
                Say goodbye to confusing course planning, join the adventure, and let OneCompass guide you to academic excellence!
                </div>
                <div className="col-4 justify-content-center align-self-center px-5">
                    <form onSubmit={handleLogIn}>
                        <h2 className='text-center fw-bold text-secondary'>Log In</h2>
                        <p className="text-center">New user?
                            {/* <a href="./signup">Sign Up</a> */}
                            <button className="text-secondary border-0" onClick = {signupLink} >Sign Up</button>
                        </p>
                        <div className="col">
                            <label className="row fs-4">Username</label>
                            <input className="row w-100"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}/>
                        </div>
                        <div className="col">
                            <label className="row fs-4">Password</label>
                            <input className="row w-100"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}/>
                        </div>
                        <button className="flex btn-primary mt-4 align-self-end">Log In</button>                            
                    </form>
                </div>
            </div>
        </div>
    )
}