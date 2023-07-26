import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import signupService from '../services/signup'

export const Signup = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [cohort, setCohort] = useState('');
    const [errorMessage, setErrorMessage] = useState(null)

    const handleSignUp = async (e) => {
        e.preventDefault();
        try {
            const user = await signupService.signup({
              username, password, email, cohort
            })
            // này chưa có authorization đàng hoàng mà chạy tạm z trc
            navigate('/profile');
            setUsername('')
            setPassword('')
            setEmail('')
            setCohort('')
        } catch (exception) {
        setErrorMessage('Invalid Signup')
        setTimeout(() => {
            setErrorMessage(null)
        }, 5000)
    }
    }
    
    let navigate = useNavigate(); 
    const loginLink = () => {
        navigate('/');
    }

    return (
        <div className="container">
        <div className="row">
        <div className="col-8 justify-content-center align-self-center">
        <p className="webName text-center">ONECOMPASS</p>   
        Once upon a time, there was a lovely web named OneCompass. 
        It offered a personalized roadmap, tracking progress and efficient course planning. 
        It empowered students to make informed decisions and stay on track for timely degree completion. 
        Say goodbye to confusing course planning, join the adventure, and let OneCompass guide you to academic excellence!
        </div>
        <div className="col-4 justify-content-center align-self-center px-5">
          <form onSubmit={handleSignUp}>
            <h2 className='text-center fw-bold text-secondary'>Sign Up</h2>
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
            <div className="col">
              <label className="row fs-4">Email</label>
              <input className="row w-100"
                value={email}
                onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className="col">
              <label className="row fs-4">Cohort</label>
              <input className="row w-100"
                value={cohort}
                onChange={(e) => setCohort(e.target.value)}/>
            </div>
            <button className="flex btn-primary mt-4 align-self-end">Sign Up</button>  
            <p>{errorMessage}</p>
            <p className="text-center">Have an account already?
              <button className="text-secondary border-0" onClick = {loginLink} >Log In</button>
            </p> 
          </form>
        </div>
      </div>
    </div>
    )
}
