import React, { useState } from "react";
import Cryptodisplay from "./cryptodisplaying";
import cryptoinfo from "./cryptoinfoing.json";
import Wrapper from "wrapper";

function App() {
  const [crypto] = useState(cryptoinfo);

  return (
    <Wrapper>
      {crypto.map((crypto) => (
        <Cryptodisplay
          name={crypto.name}
          info={crypto.info}
          change={crypto.change}
        />
      ))}
      ;
    </Wrapper>
  );
}

export default App;
