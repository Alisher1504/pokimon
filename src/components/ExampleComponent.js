import React, { useState } from 'react'; 
import axios from 'axios'; 
import './ExampleComponent.css'; 
 
function ExampleComponent(){ 

 
 function fetchPokemon(){ 
  axios.get(`https://pokeapi.co/api/v2/pokemon/${pakiniismi}`) 
  .then((result) => { 
   setPokemon({ 
    name: pakiniismi, 
    species: result.data.species.name, 
    img: result.data.sprites.front_default, 
    attack: result.data.stats[1].base_stat, 
    defense: result.data.stats[2].base_stat, 
    type: result.data.types[0].type.name 
   }); 
   console.log(result) 
  }) 
  .catch(() => { 
   console.error("Error!") 
  }) 
 } 

 const [pakiniismi, sitpakiismi] = useState(""); 
 const [pakimon, setPokemon] = useState({ 
  name: "", 
  species: "", 
  img: "", 
  attack: "", 
  defense: "", 
  type: "" 
 }) 
 
 return ( 
  <> 
   <h1 className="themeText">My_React_Pokemon</h1> 
   <div className="searchlar"> 
    <input  
     className="search" 
     type="text" 
     onChange={(event) => { 
      sitpakiismi(event.target.value); 
     }} 
    /> 
    <button onClick={fetchPokemon}>Search</button> 
   </div> 
 
   <div className="reslaruchun"> 
    <div className="card"> 
     <h1>{pakimon.name}</h1> 
     <img src={pakimon.img} /> 
     <h3>SPECIES: {pakimon.species}</h3> 
     <h3>ATTACK: {pakimon.attack}</h3> 
     <h3>DEFENSE: {pakimon.defense}</h3> 
     <h3>TYPE: {pakimon.type}</h3> 
    </div> 
   </div> 
  </> 
 ); 
}; 
 
export default ExampleComponent;