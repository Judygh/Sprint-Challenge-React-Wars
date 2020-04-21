// import React, { useState, useEffect } from "react";
// import "./App.css";
// import axios from'axios'
// import Characters from "../src/components/Character";
// import styled from "styled-components";

// const H = styled.h1`
// font-size: 4rem;
//   color:white;
//   font-family: 'Indie Flower', cursive;
//   text-align:center;
// `;

// const App = () => {
//   // Try to think through what state you'll need for this app before starting. Then build out
//   // the state properties here.

//   // Fetch characters from the API in an effect hook. Remember, anytime you have a
//   // side effect in a component, you want to think about which state and/or props it should
//   // sync up with, if any.

//   const [characters, setCharacters] = useState([]);
//   // console.log("Characters", characters[0]);
//   useEffect(() => {
//     axios
//       .get('https://rickandmortyapi.com/api/character/')
//       .then(res=> setCharacters(res.data.results))
//       .catch(err=>console.log('We having technical issue', err))
//   },[]);

//   return (
//     <div className="App">
//       <H> Characters</H>

//       {/* <div className ='character'>
//         {characters.map(character => (
//           <character key={character.id} name={character.name} img={character.image}  />
//         ))}
//       </div> */}

//     </div>
//   );
// };

// export default App;

import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Character from "../src/components/Character";
import styled from "styled-components";
import Container from "reactstrap/lib/Container";

const H = styled.h1`
  font-size: 4rem;
  color: #202429;
`;

const App = () => {
  const [characters, setCharacters] = useState([]);
  console.log("Characters", characters[0]);

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/`)
      .then((res) => setCharacters(res.data.results))
      .catch((err) => console.log("Something is wrong!!!", err));
  }, []);
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <Container>
    <div className="App">
      <H>Characters</H>

      <div className="character-container">
        {characters.map((character) => (
          <Character
            key={character.id}
            name={character.name}
            img={character.image}
            gender={character.gender}
            status={character.status}
            species={character.species}
          />
        ))}
      </div>
    </div>
    </Container>
  );
};

export default App;
