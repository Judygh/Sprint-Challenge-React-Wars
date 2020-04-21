// Write your Character component here
import React from "react";
import styled from "styled-components";

const Card = styled.div`
  background: #333333;
  margin: auto;
  padding: auto;
  width: 300px;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-item: center;
  justify-content: space-around;
  margin-bottom: 20px;
  border-radius: 5px;
`;

const CharacterImg = styled.img`
  width: 300px;
  height: 200px;
  object-fit: scale;
  border-radius: 5px;
`;

const P = styled.p`
  color: white;
  display: flex;
  justify-content: space-between;
  align-text: left;
  margin: auto;
`;

const H = styled.h2`
  color: white;
  margin: auto;
  align-text: center;
  font-size: 1, 5rem;
`;

const Character = (props) => {
  return (
    <Card>
      <CharacterImg src={props.img} alt="Characters" />
      <H>{props.name}</H>
      <P>Gender: {props.gender}</P>
      <P>Status: {props.status}</P>
      <P>Species: {props.species}</P>
    </Card>
  );
};

export default Character;
