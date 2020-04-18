// Write your Character component here
import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "reactstrap";

const Card = styled.div`
  background: #202429;
  margin: auto;
  width: 400px;
  display: flex;
  flex-direction: column;
  align-item: center;
  justify-content: space-between;
  margin-bottom: 20px;
  
`;

const CharacterImg = styled.img`
  width: 200px;
  height: 200px;
  object-fit: scale;
  margin: auto;
`;

const P = styled.p`
  color: white;
  display: flex;
  align-text: left;
  margin:auto;
`;

const H = styled.h2`
  color: white;
  font-size: 2rem;
`;

const Character = (props) => {
  return (
    <Col sm="6" sm="6" md="4" xl="3">
      <Card>
        <H>{props.name}</H>
        <CharacterImg top width="10%" src={props.img} alt="Characters" />
        <P>Gender: {props.gender}</P>
        <P>Status: {props.status}</P>
        <P>Species: {props.species}</P>
      </Card>
    </Col>
  );
};

export default Character;
