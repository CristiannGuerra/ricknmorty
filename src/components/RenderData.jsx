import { useEffect, useState } from "react";
import Character from "./Character";

const Renderdata = ({ character }) => {
  const [resultChar, setResultChar] = useState([]);

  useEffect(() => {
    usingApi(character);
  }, [character]);

  const usingApi = async (character) => {
    try {
      const res = await fetch(
        `https://rickandmortyapi.com/api/character/?name=${character}&status=alive`
      );

      const dataChar = await res.json();
      setResultChar(dataChar.results);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="row mt-2">
      {resultChar.map((item) => (
        <Character key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Renderdata;
