import { useState } from "react";
import Form from "./components/Form";
import RenderData from "./components/RenderData";

const RickAndMorty = () => {

  const [character, setCharacter] = useState('')

  return (
    <div className="container">
      <h1>Rick and Morty</h1>
      <Form setCharacter={setCharacter} />
      <RenderData character={character} />
    </div>
  );
};

export default RickAndMorty;
