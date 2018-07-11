import React from "react";
import styled from "styled-components";

const MapElement = styled.div`
  height: 100vh;
`;

const Map = ({ innerRef }) => <MapElement innerRef={innerRef} />;

export default Map;
