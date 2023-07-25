import { useState } from 'react'

export const Login = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogIn = (e) => {
        e.preventDefault();
        console.log();
    }

    return (
        <div className="container flex w-100 h-100">
            <div className="row">
                <div className="col-8">
                Once upon a time, there was a lovely web named OneCompass. 
                It offered a personalized roadmap, tracking progress and efficient course planning. 
                It empowered students to make informed decisions and stay on track for timely degree completion. 
                Say goodbye to confusing course planning, join the adventure, and let OneCompass guide you to academic excellence!
                </div>
                <div className="col-4">
                    <form onSubmit={handleLogIn}>
                        <h2 className="signup-header">Sign up</h2>
                        <div>
                            <label htmlFor="username">Username</label>
                            <input 
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                type="username" 
                                id="username" 
                                name="username" />
                        </div>
                        <div>
                            <label htmlFor="password">Password</label>
                            <input 
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                type="password" 
                                id="password" 
                                name="password" />
                        </div>
                        <button>Log In</button>
                    </form>
                </div>
            </div>
        </div>
    )
}