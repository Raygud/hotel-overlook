import React,{useState, useEffect} from 'react'
import './Navbar.scss'
import Logo from './logo.svg'
import Login from '../../utility/Login' 
const Navbar = () => {

  const [isLoggedInn, setLoggedInn] = useState(false);
  const [RunLog, setRunLog] = useState(false)
  const [token, setToken] = useState(document.cookie.split("=")[1])

  function resetCookie(){
console.log("penis")
  }

  useEffect(() => {
    setToken(document.cookie.split("=")[1])
    if(token == undefined){
      document.cookie = "Token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    }
  {token != undefined ? setLoggedInn(true):setLoggedInn(false)}
}, [RunLog]); 

  return (
    <>  
    <header className="MainHeader">
      <img className="Logo" src={Logo}></img>
      <nav>
        <ul>
          <li>Forside</li>
          <li>Hoteller og destinationer</li>
          <li>Værelser</li>
          <li>Reservation</li>
          {isLoggedInn ? 
            <li onClick={() => {setToken(undefined); setRunLog(!RunLog)}}>Log Out</li>:
          <li onClick={() => {setRunLog(!RunLog); Login()}}>Login</li>
          }   
        </ul>
      </nav>
    </header>
    </>
  )
}

export default Navbar
