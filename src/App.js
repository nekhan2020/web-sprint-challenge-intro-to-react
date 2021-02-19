import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import { apiUrl } from "./APIURL/index";
import styled from "styled-components";
import Character from "./components/Character";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const AppHolder = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;
    flex-wrap: wrap;

    h1 {
      font-weight: 500;
      font-size: 3rem;
    }
  `;

  const [characters, setCharacters] = useState([]);

  const getCharacters = () => {
    axios
      .get(`${apiUrl}people/`)
      .then((res) => {
        setCharacters(res.data);
      })
      .catch((error) => {
        console.log(`Something went wrong: ${error}`);
      });
  };

  useEffect(getCharacters, []);

  return (
    <AppHolder>
      <h1 className="Header">Characters</h1>
      {characters.map((e) => {
        return <Character props={e}></Character>;
      })}
    </AppHolder>
  );
};

export default App;
