import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: black;
  padding: 8px 16px;
  border-radius: 4px;
`;

const Text = styled.span`
  color: white;
  font-size: 1.4em;
  font-weight: bold;
`;

const Tooltip = ({ features }) => (
  <div>
    {features.map(
      feature =>
        feature.layer.id.startsWith("day") && (
          <Wrapper key={feature.properties.name}>
            <Text>
              Day {feature.properties.number}. {feature.properties.name}
            </Text>
          </Wrapper>
        )
    )}
  </div>
);

export default Tooltip;
