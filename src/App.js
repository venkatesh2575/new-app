
import { useState } from 'react';
import './App.css';
import About from './Components/About';
import CBC from './Components/CBC';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import Alert from './Components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  
  const [mode,setMode]=useState('dark ');
  const [title,setTitle]=useState('TextUtils');
  const [alert,setAlert]= useState(null);

  const ShowAlert=(message,type)=>
  {
    setAlert({
      msg: message,
      Type: type
    }
    )
    setTimeout(()=>
      setAlert(null)
     
      ,2000);
  }

  const toggleMode =()=>
  {
    if(mode==='dark')
    {
      setMode('light');
      document.body.style.backgroundColor='white';
      ShowAlert("Light mode enabled","warning");
    }
    else{
      setMode('dark');
      document.body.style.backgroundColor='black';
      ShowAlert("Dark mode enabled","success");
    }
  }
  return (
    <>
   <Router>
    
<Navbar title={title} mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
  <div className='container' style={{color:mode==='dark'?'white':'black'}}>
  
   <Routes>
          <Route path="/about"
            element = {<About />} />
          </Routes>
          <Routes>
          <Route path="/"element=
          {<Textform  ShowAlert={ShowAlert} heading = "enter text to visualise" mode={mode}/>}/>
          </Routes>
      
<h1 >welcome to Textutils</h1>

</div>
</Router>
 </>);
}

export default App;



