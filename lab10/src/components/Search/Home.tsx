import { useRef } from 'react'
import "../../App.css"
import {GetURL} from "../Funcs"
import {useState} from 'react';
import {useHistory, useRouteMatch} from 'react-router-dom';
import {UserActionTypes} from '../../reducers/userReducer'
import { useDispatch } from 'react-redux';

function Home() {
    const state = useRef<HTMLInputElement>(null);
    const [place, setPlaceHolder] = useState("Поиск...");
    const h = useHistory();
    const url = GetURL(useRouteMatch().url);
    const dispatch = useDispatch();

    const Find = () => {
      if(state.current !== null && state.current.value !== "") {
        dispatch({type: UserActionTypes.SET_USERNAME, payload: state.current.value});
        h.push(`${url}/about/${state.current.value}`);
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
            ref={state}
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