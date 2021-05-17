import "../../App.css"
import Card from "../Cards/Card"
import {GetURL} from "../Funcs"
import Error from "../Error/Error"
import {useEffect} from 'react';
import {useHistory, useRouteMatch} from 'react-router-dom';
import {TypedUseSelector} from "../Selector"
import {BindAction} from '../bindHook'
import { useDispatch } from "react-redux";
import { UserActionTypes } from "../../reducers/userReducer";


function About() {
    const dispatch = useDispatch();
    const h = useHistory();
    const user = TypedUseSelector(state=>state.user.user);
    const url = GetURL(useRouteMatch().url);
    const {fetchUser} = BindAction();
    console.log(url);
    useEffect(()=> {
      if(typeof(user) != typeof({}))
        fetchUser(user);
    }, [user])

    const BackClick = () => {
      dispatch({type: UserActionTypes.SET_USERNAME, payload: ""})
      h.push(`/`);
    }
  
    return (
      <div id="cont" className="container container-huge" style={{height: "auto"}}>
        {(user === "Corruption while fetching user") ? <Error/> : (typeof(user) === typeof({}) ? <Card/> : <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>)}
        <button className="search-button" style={{marginBottom: "30px"}} onClick={BackClick}>Вернуться</button>
      </div>
    );
  }
  
  export default About;