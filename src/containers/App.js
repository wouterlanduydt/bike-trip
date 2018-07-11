import React from "react";
import { injectGlobal } from "styled-components";
import reset from "styled-reset";
import Map from "../components/Map";
import Stats from "../components/Stats";

injectGlobal`
  ${reset}

  * {
    box-sizing: border-box;
  }

  body {
    font-size: 62.5%;
  }
`;

const App = () => (
  <div>
    <Map />
    <Stats />
  </div>
);

export default App;
