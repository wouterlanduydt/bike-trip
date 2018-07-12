import React from "react";
import { injectGlobal } from "styled-components";
import { Provider } from "mobx-react";
import reset from "styled-reset";
import Map from "../components/Map";
import Stats from "../components/Stats";
import ShowTotal from "../components/ShowTotal";
import etapesStore from "../stores/etapesStore";

injectGlobal`
  ${reset}

  * {
    box-sizing: border-box;
  }

  body {
    font-size: 62.5%;
    font-family: Helvetica, sans-serif;
  }
`;

const stores = {
  etapesStore
};

const App = () => (
  <Provider {...stores}>
    <div>
      <Map />
      <Stats />
      <ShowTotal />
    </div>
  </Provider>
);

export default App;
