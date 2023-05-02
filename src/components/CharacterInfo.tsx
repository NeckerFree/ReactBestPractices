import React, { useState } from 'react';
import axios from 'axios';

interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
}



const CharacterInfo: React.FC = () => {
  const [character, setCharacter] = useState<Character | null>(null);
  const [error, setError] = useState<string | null>(null);
const [count, setCount]=useState(1);
  const fetchCharacter = async () => {
    try {
      setCount((count) => count + 1);
      const response = await axios.get<Character>(
        `https://rickandmortyapi.com/api/character/${count}`
      );
      setCharacter(response.data);
      setError(null);
    } catch (e) {
      setCharacter(null);
      setError(e.response.data.error);
    }
  };

  return (
    <div>
      <button onClick={fetchCharacter}>Fetch Character</button>
      {error && <p>{error}</p>}
      {character && (
        <div>
          <h2>{character.name}({character.id})</h2>
          <img src={character.image} alt={character.name} />
          <p>Status: {character.status}</p>
          <p>Species: {character.species}</p>
          <p>Type: {character.type}</p>
          <p>Gender: {character.gender}</p>
          <p>Origin: {character.origin.name}</p>
          <p>Location: {character.location.name}</p>
        </div>
      )}
    </div>
  );
};

export default CharacterInfo;