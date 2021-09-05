/* eslint-disable array-callback-return */
import React, { useState, useEffect } from 'react';
import '../styles/styles_base.css';
import Card from './Card';

function Body() {
  const [characters, setCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  async function fetchAPI () {
    console.log(currentPage);
    const urlAPI = `https://rickandmortyapi.com/api/character/?page=${currentPage}`;
    const characterObjFetch = await fetch (urlAPI);
    const {results} = await characterObjFetch.json();

    if(characters.length>0){
      let newObject = characters;

      results.forEach(element => {
        newObject.push(element);
      });
      setCharacters(newObject);
    } else {
      setCharacters(results);
    }
  }


  useEffect(() => {
    fetchAPI();
  }, [currentPage]);

  function handleLoadMore(){
    setCurrentPage(currentPage+1);
  }

  return (
    <div className="flex-row-center flex-wrap height-100vh">
      {console.log(characters)}
      {characters.map((item) => {
        return <Card Esme={item.name} Alfonso={item.image} key={item.id} />
      })}
      <button className="width-80percent bg-yellow font-weight-bold font-size-xl btn-cargar-mas" onClick={handleLoadMore}>Cargar más...</button>
    </div>
  );
}

export default Body;
