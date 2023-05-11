import React, {useState, useEffect} from "react";

import Card from "./Card";


function App() {
  const [films, setFilms] = useState([]);
  
  useEffect (() => {
 async function fetchFilms() {
  let res = await fetch("https://swapi.dev/api/films/?format=json");
  let data =await res.json();
  setFilms(data.results);
 }
 fetchFilms();
  },  []);
 
  console.log("films",films);
  return (
    <div className="App">
      <h1 className="title">Star Wars</h1>
      <div className="movie-box">
      <Card data ={films}/>
       </div>
    </div>
  );
}

export default App;
