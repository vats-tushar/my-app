
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

import Alert from './components/Alert';


function App() {
  const [mode,setmode] = useState('light');
  const [alert, setalert] = useState(null);

  const showAlert = (message, type)=>{
    setalert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setalert(null);
    }, 1500);
  }
  const toggleMode = ()=>{
    if(mode === 'light'){
      setmode('dark');
      document.body.style.backgroundColor = '#1f1f1f';
      showAlert("Dark mode is enabled.","success");
    }
    else{
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode is enabled.","success");
    }
  }
  return (
    <>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
        <div className="container">
          <TextForm heading="Enter your text:" mode={mode} showAlert={showAlert}/>
        </div>
    </>
  );
}

export default App;
