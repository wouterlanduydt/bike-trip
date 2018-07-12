import React from "react";
import { inject, observer } from "mobx-react";
import styled from "styled-components";

const Button = styled.button`
  position: fixed;
  top: 16px;
  left: 16px;
  border: none;
  background-color: ${props => (props.disabled ? "grey" : "black")};
  font-weight: bold;
  font-size: 1.4em;
  padding: 8px 16px;
  border-radius: 16px;
  color: white;
  cursor: ${props => (props.disabled ? "default" : "pointer")};
`;

const ShowTotal = ({ etapesStore }) => (
  <Button
    onClick={() => etapesStore.showTotal()}
    disabled={
      etapesStore.etapeStats.name === "Totaal" ||
      etapesStore.etapeStats.name === undefined
    }
  >
    Toon Totaal
  </Button>
);

export default inject(`etapesStore`)(observer(ShowTotal));
