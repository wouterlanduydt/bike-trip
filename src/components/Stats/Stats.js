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

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Day = styled.span`
  font-size: 1.2em;
  margin-bottom: 2px;
`;

const Title = styled.h2`
  font-size: 2em;
  font-weight: bold;
  height: 20px;
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
  width: 60%;
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
  margin-top: 2px;
  font-size: 1.4em;
`;

const isTotalSelected = store => {
  return (
    store.etapeStats.name !== "Totaal" && store.etapeStats.name !== undefined
  );
};

const Stats = ({ etapesStore }) => (
  <Wrapper>
    {isTotalSelected(etapesStore) && (
      <TitleWrapper>
        <Day>- Dag {etapesStore.etapeStats.id} -</Day>
        <StyledTwemoji options={{ className: "twemoji" }}>
          <Title>{etapesStore.etapeStats.name || etapesStore.total.name}</Title>
        </StyledTwemoji>
      </TitleWrapper>
    )}
    <List>
      <ListItem>
        <StatNumber>
          {etapesStore.etapeStats.km || etapesStore.total.km}
        </StatNumber>
        <StatTitle>kilometer</StatTitle>
      </ListItem>
      <ListItem>
        <StatNumber>
          {etapesStore.etapeStats.knooppunten || etapesStore.total.knooppunten}
        </StatNumber>
        <StatTitle>knooppunten</StatTitle>
      </ListItem>
    </List>
  </Wrapper>
);

export default inject(`etapesStore`)(observer(Stats));
