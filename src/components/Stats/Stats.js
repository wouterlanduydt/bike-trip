import React from "react";
import { inject, observer } from "mobx-react";

const Stats = ({ etapesStore }) => (
  <div>
    <h1>{etapesStore.etapeStats.name}</h1>
    <ul>
      <li>{etapesStore.etapeStats.km}</li>
      <li>{etapesStore.etapeStats.knooppunten}</li>
      <li>{etapesStore.etapeStats.cities}</li>
    </ul>
  </div>
);

export default inject(`etapesStore`)(observer(Stats));
