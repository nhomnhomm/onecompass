import React from 'react';
import './App.css';

import { Signup } from './Signup';
import { Login } from './Login';

function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }
  return (
    <div className="App">
      {
        currentForm === "login" ? <Login onformSwitch={toggleForm}/> : <Signup onformSwitch={toggleForm}/>
      }

      
    </div>
  );
}

export default App;