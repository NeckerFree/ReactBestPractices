
import React, { useState } from 'react';
import axios from 'axios';
import { useErrorHandler } from "react-error-boundary";

const CharacterInfo = () => {
    const handleError = useErrorHandler();
    const [character, setCharacter] = useState(null);
    // const [error, setError] = useState(null);
    const [count, setCount] = useState(1);
    const baseUrl = "https://rickandmortyapi.com/api/character/";
    const badUrl = "https://rickandmortyapi.com/api/person/";
    const fetchCharacter = async (url) => {
        setCount((count) => count + 1);
        let URL = `${url}${count}`;
        axios.get(URL) // send a GET request
            .then((response) => {
                setCharacter(response.data);
            })
            .catch((error) => { // error is handled in catch block
                setCharacter(null);
                // setError(error);
                handleError(error);
            });

    };

    return (
        <>

            <div className="buttons">
            <button className="button-happy" onClick={() => fetchCharacter(baseUrl)}>Fetch Character</button>
            <button className="button-app" onClick={() => fetchCharacter(badUrl)}>Fetch Character Error</button>
            </div>
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
        </>
    );
};

export default CharacterInfo;
