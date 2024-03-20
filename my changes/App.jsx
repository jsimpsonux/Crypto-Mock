import Navbar from "./components/Navbar.jsx";
import Watchlist from "./components/Watchlist/index.jsx";
// import Logo from './components/Logo.jsx'
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
// import CryptoItem from './components/CryptoItem.jsx';
// import RenderItems from "./components/Watchlist/RenderItems.jsx";

function App() {



  
  return (
   <>
    <Navbar />
<Watchlist/>
    {/* <CryptoItem name='bitcoin' abr='BTC' size='40px' key={1}/> 
   <RenderItems /> */}

   <br/>




   
        </>
  );
     
   

}

export default App
