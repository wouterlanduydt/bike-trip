import React from "react";
import { inject, observer } from "mobx-react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 20vh;
`;

const Title = styled.h2`
  font-size: 2em;
  font-weight: bold;
  margin-bottom: 4vw;
`;

const List = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 80%;
`;

const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StatNumber = styled.span`
  font-size: 2.8em;
  font-weight: bold;
`;

const StatTitle = styled.span`
  font-size: 1.4em;
`;

const Stats = ({ etapesStore }) => (
  <Wrapper>
    <Title>{etapesStore.etapeStats.name}</Title>
    <List>
      <ListItem>
        <StatNumber>{etapesStore.etapeStats.km}</StatNumber>
        <StatTitle>kilometer</StatTitle>
      </ListItem>
      <ListItem>
        <StatNumber>{etapesStore.etapeStats.knooppunten}</StatNumber>
        <StatTitle>knooppunten</StatTitle>
      </ListItem>
      <ListItem>
        <StatNumber>{etapesStore.etapeStats.cities}</StatNumber>
        <StatTitle>steden</StatTitle>
      </ListItem>
    </List>
  </Wrapper>
);

export default inject(`etapesStore`)(observer(Stats));
