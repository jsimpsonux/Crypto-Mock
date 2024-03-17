import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Navbar from "./components/Navbar.jsx";
import { Wallet } from "@mui/icons-material";
import WalletPage from "./components/WalletPage/index.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navbar />
    <WalletPage />
    <App />
  </React.StrictMode>
);
