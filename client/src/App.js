import React from 'react';
import './App.css';

import { Signup } from './Signup';
import { Login } from './Login';

function App() {
  const [currentForm, setCurrentForm] = useState('login');

  return (
    <div className="App">
      {
        currentForm === "login" ? <Login /> : <Signup />
      }

      
    </div>
  );
}

export default App;