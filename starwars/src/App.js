import React, { useState, useEffect } from "react";
import "./App.css";
import axios from'axios'
import Characters from "../src/components/Character";
import styled from "styled-components";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [characters, setCharacters] = useState([]);
  // console.log("Characters", characters[0]);
  useEffect(() => {
    axios
      .get("https://swapi.py4e.com/api/films/1")
      .then(res=> setCharacters(res.data.results))
      .catch(err=>console.log('We having technical issue',err))
  },[]);

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
    </div>
  );
};

export default App;
