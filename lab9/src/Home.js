import React from 'react'
import "./App.css"
import {UpdateLocalStorage, GetURL} from "./Funcs"
import {useState} from 'react';
import {useHistory, useRouteMatch} from 'react-router-dom';

function Home({tryFind}) {
    const [state, setstate] = useState("");
    const [place, setPlaceHolder] = useState("Поиск...");
    const h = useHistory();
    const url = GetURL(useRouteMatch().url);
    if(localStorage.length !== 0) {
      tryFind(localStorage.getItem(`username`));
      h.push(`${url}/about`);
    }
  
    const Find = () => {
      if(state !== "") {
        tryFind(state);
        UpdateLocalStorage(state);
        setstate("");
        h.push(`${url}/about`);
      }
      else {
        setPlaceHolder("Введите логин!");
      }
    };
    return (
      <div className="container">
          <span>Поиск пользователя GitHub</span>
          <input 
            className="search-box" 
            value={state}
            onChange = {(event) => setstate(event.target.value)}
            onKeyPress = {(event)=> {
              if(event.key === "Enter")
                Find();
            }}
            id="bar" 
            placeholder={place}>
          </input>
          <button 
            className="search-button"
            onClick={Find}>
          Поиск
          </button>
      </div>
    );
  }

  export default Home;