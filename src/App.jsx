import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {signInWithPopup} from "firebase/auth";
import { auth, provider } from './firebase/config';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Merhaba</h1>
      <button onClick={()=>signInWithPopup(auth,provider)}>Google İle Giriş Yap</button>
     
    </>
  )
}

export default App