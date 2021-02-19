// Write your Character component here
import React from "react";
import styled from "styled-components";

const CharacterDiv = styled.div`
  border: 1px red solid;
  display: flex;
  flex-direction: column;
  max-width: 600px;
  /* flex-wrap: wrap; */
  justify-content: center;
  /* align-items: center; */

  h5 {
    text-align: center;
  }

  ul li {
    list-style: none;
  }
`;

const Character = ({ props }) => {
  return (
    <CharacterDiv>
      <h2>{props.name}</h2>
      <h4>Gender: {props.gender}</h4>
      <h5>INFO:</h5>
      <ul>
        <li>Mass:{props.mass}</li>
        <li>Birth year:{props.birth_year}</li>
        {/* <li>Home World:{props.homeworld}</li> */}{" "}
        {/*todo couldn't get an api
        inside of an api look into how to do this later */}
      </ul>
    </CharacterDiv>
  );
};

export default Character;

//todo not sure why theres so much space in between INFO and the stats.. also isnt a perfect centering... look into fixing this and understanding it deeper later
