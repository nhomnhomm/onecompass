import { useState, useEffect } from 'react'
import { useNavigate, Navigate } from "react-router-dom";
import userService from '../services/users'
import loginService from '../services/login'

export const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null)

  // see user list in console.log
  useEffect(() => {
    userService
    .getAll()
    .then(response => {
      console.log(response)
    })
  }, [])

  let navigate = useNavigate(); 

  useEffect(() => {
    if (user) {
      navigate('/profile')
    }
  }, [user])

  const signupLink = () =>{ 
    navigate('signup');
  }
  const forgotPasswordLink = () => {
    navigate('forgotpassword')
  }

  const handleLogIn = async (e) => {
    e.preventDefault();
    console.log();
    //
    try {
      const user = await loginService.login({
        username, password,
      })
      window.localStorage.setItem(
        'loggedInUser', JSON.stringify(user)
      ) 
      setUser(user)
      setUsername('')
      setPassword('')
      } catch (exception) {
      setErrorMessage('Wrong credentials')
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    }
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
            <p>{errorMessage}</p>                         
            <button className="text-secondary border-0" onClick = {forgotPasswordLink}>Forgot password?</button>
          </form>
        </div>
      </div>
    </div>
  )
}