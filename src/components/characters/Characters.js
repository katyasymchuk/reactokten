import {useState} from "react";

import Character from "../character/Character";

export default function Characters(){
    let[characters,setCharacters]= useState([]);
    fetch('https://rickandmortyapi.com/api/character')
        .then(value => value.json())
        .then(value => {
            setCharacters(value.results);
            }
        );
    return(
        <div className="Character">
            {characters.map((character,index)=>(<Character item={character} key={index}/>))}
        </div>
    )




}