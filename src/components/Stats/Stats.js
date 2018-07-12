import React from "react";
import { inject, observer } from "mobx-react";
import Twemoji from "react-twemoji";
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

const StyledTwemoji = styled(Twemoji)`
  .twemoji {
    margin: 0 4px;
    width: 24px;
    height: auto;
    transform: scaleX(-1);
  }
`;

const List = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 90%;
`;

const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
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
    <StyledTwemoji options={{ className: "twemoji" }}>
      <Title>{etapesStore.etapeStats.name || etapesStore.total.name}</Title>
    </StyledTwemoji>
    <List>
      <ListItem>
        <StatNumber>
          {etapesStore.etapeStats.km || etapesStore.total.km}
        </StatNumber>
        <StatTitle>kilometer</StatTitle>
      </ListItem>
      <ListItem className="center">
        <StatNumber>
          {etapesStore.etapeStats.knooppunten || etapesStore.total.knooppunten}
        </StatNumber>
        <StatTitle>knooppunten</StatTitle>
      </ListItem>
      <ListItem>
        <StatNumber>
          {etapesStore.etapeStats.cities || etapesStore.total.cities}
        </StatNumber>
        <StatTitle>steden</StatTitle>
      </ListItem>
    </List>
  </Wrapper>
);

export default inject(`etapesStore`)(observer(Stats));
