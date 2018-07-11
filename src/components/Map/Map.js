import React from "react";
import styled from "styled-components";

const MapElement = styled.div`
  height: 80vh;
`;

const Map = ({ innerRef }) => <MapElement innerRef={innerRef} />;

export default Map;
