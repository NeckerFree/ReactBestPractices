import React, { useState } from 'react';
import axios from 'axios';
//import Collection from '../Data/collection.js';
// import {writeJsonFile} from 'write-json-file';




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
// const formatDate=(date)=> {  
//   if (!(date instanceof Date)) {
//     throw new Error('Invalid "date" argument. You must pass a date instance')
//   }

//   const year = date.getFullYear()
//   const month = String(date.getMonth() + 1).padStart(2, '0')
//   const day = String(date.getDate()).padStart(2, '0')

//   return `${year}-${month}-${day}`
// }
const CharacterInfo: React.FC = () => {
  const [character, setCharacter] = useState<Character | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [count, setCount] = useState(1);
  // const dateTimeString = formatDate(new Date());
  //const logFile =new Collection('logger', `./src/data/logger${dateTimeString}.json`);
  // writeJsonFile('foo.json', {foo: dateTimeString});
  function processError(errorMessage: any) {
    const now = new Date();
    var currentTime = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
    console.log(currentTime+ errorMessage);
    // const logError = {
    //   time: `${currentTime}`,
    //   type: 'error',
    //   description: `${errorMessage}`
    // };
    //logFile.insert(logError);
    //fs.writeFileSync(`./${dateTimeString}.txt`, `${errorMessage}\r\n`);
  }
  const fetchCharacter = async () => {
    setCount((count) => count + 1);
    let URL = `https://rickandmortyapi.com/api/character/${count}`;
    axios.get<Character>(URL) // send a GET request
      .then((response) => {
        setCharacter(response.data);
        setError(null);
        console.log("success");
      })
      .catch((error) => { // error is handled in catch block
        setCharacter(null);
        setError(error.message);
        processError(error.message);
        if (error.response) { // status code out of the range of 2xx
          console.log("Data :", error.response.data);
          console.log("Status :" + error.response.status);
        } else if (error.request) { // The request was made but no response was received
          console.log(error.request);
        } else {// Error on setting up the request
          console.log('Error', error.message);
        }
      });

  };

  const fetchCharacterError = async () => {
    setCount((count) => count + 1);
    let URL = `https://rickapi.com/api/character/${count}`;
    axios.get<Character>(URL) // send a GET request
      .then((response) => {
        setCharacter(response.data);
        setError(null);
        console.log("success");
      })
       .catch((error) => { // error is handled in catch block
        throw new Error(error.message);
        // setCharacter(null);
        // setError(error.message);
        // if (error.response) { // status code out of the range of 2xx
        //   console.log("Data :", error.response.data);
        //   console.log("Status :" + error.response.status);
        // } else if (error.request) { // The request was made but no response was received
        //   console.log(error.request);
        // } else {// Error on setting up the request
        //   console.log('Error', error.message);
        // }
       });

  };
  return (
    <div>
      <button onClick={fetchCharacter}>Fetch Character</button>
      <button onClick={fetchCharacterError}>Fetch Character with Error</button>
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