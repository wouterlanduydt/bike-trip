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

const Tooltip = ({ features }) => (
  <Wrapper key={features[0].properties.name}>
    <Text>
      Day {features[0].properties.number}. {features[0].properties.name}
    </Text>
  </Wrapper>
);

export default Tooltip;
