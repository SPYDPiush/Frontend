import React, { useState } from 'react'
import 'bulma/css/bulma.min.css';
import Navbar from './components/Navbar';
import Contents from './components/Contents';

function App() {


  const [login,setLogin] = useState(false)

  const [signup,setSignup] = useState(false)

  const handleOnLoginCLick = () =>{

    setLogin((curr) => !curr)
  }

  const handleOnSignUpClick = () => {

    setSignup((curr) => !curr)
  }

  return (
    <>
    <div className='block'>
    <Navbar handleOnLoginCLick = {handleOnLoginCLick} handleOnSignUpClick={handleOnSignUpClick}/>
    </div>
    <div className='block'>
      <Contents login={login} setLogin={setLogin}  setSignup={setSignup} signup={signup}/>
    </div>
    
    </>

  )
}

export default App
