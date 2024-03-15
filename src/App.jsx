import Price from './components/Price.jsx'
import Logo from './components/Logo.jsx'
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  
  return (
   <>
   <Logo name="bitcoin" abr="btc" width="40px" />
   <Logo name="bnb" abr="bnb" width="40px" />
   <Logo name="cardano" abr="ada" width="40px" />
   <Logo name="solana" abr="sol" width="40px" />
   <Logo name="bnb" abr="bnb" width="40px" />
   
  
        <Price crypto="BTC"/>
        </>
  );
     
   
}

export default App
