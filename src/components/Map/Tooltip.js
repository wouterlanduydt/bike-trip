import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: black;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: none;
`;

const Text = styled.span`
  color: white;
  font-size: 1.4em;
  font-weight: bold;
`;

const Tooltip = ({ feature }) => (
  <Wrapper key={feature.properties.number}>
    <Text>Etape {feature.properties.number}</Text>
  </Wrapper>
);

export default Tooltip;
