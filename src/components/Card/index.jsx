import React from "react";
import "./style.css";
import Logo from "../../components/Logo"
import crypto from "../../data/crypto.json"

function Card() {
  return (
      <div>
      {crypto.map((element) => (
        <div className="card">
          <Logo
            name={element.name}
            abr={element.abbreviation}
            size="40px"
            key={element.id}
          />
        </div>
        ))}
        </div>
  );
}

export default Card;