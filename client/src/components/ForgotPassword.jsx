import { useState } from 'react'

// import verificationCodeService 

export const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  
  const handleSendVerificationCode = (e) => {
    e.preventDefault();

  }
  
  return (
    <div className="container flex justify-content-center align-self-center">
      <form onSubmit={handleSendVerificationCode}>
        <h2 className='text-center fw-bold text-secondary'>Forgot Password?</h2>
        <p className="text-center">Please enter your email address to verify your account.</p>
        <div className="col justify-content-center text-center">
          <input className="row mx-auto"
              value={email}
              onChange={(e) => setEmail(e.target.value)}/>
          <button className="row btn-primary mt-4 mx-auto">Send</button>   
        </div>
      </form>    
    </div>
  )
}