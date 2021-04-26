import React from 'react'
import "./App.css"
import Card from "./Card"
import {ClearLocalStorage} from "./Funcs"
import {Error} from "./Funcs"
import {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';

function About({user}) {
    const [username, setUser] = useState({});
    const h = useHistory();
    const [jobsDone, setJobs] = useState(false);
    const [cleenUser, setC] = useState(false);
    if(user === "" && localStorage.length !== 0) {
      user = localStorage.getItem(`username`)
    }
    const BackClick = () => {
      setUser({});
      ClearLocalStorage();
      h.push("/");
    }
  
    useEffect(() => {
  
      if(user.length > 0) {
        fetch(`https://api.github.com/users/${user}`,
          {
            Authorization: process.env.REACT_APP_KEY,
          })
        .then((data) => {
          if(data.status === 200)
            return data.json();
          else {
            setC(true);
            return {};
          }
        })
        .then((data) => {
          setUser(data);
          setJobs(true);
        });
      }
      else {
        setC(true);
      }
    }, [user]);
    return (
      <div id="cont" className="container container-huge">
        {
            cleenUser ? <Error user={user}/> : (jobsDone ? <Card userlist={username}/> : <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>)
        }
        <button className="search-button" onClick={BackClick}>Вернуться</button>
      </div>
    );
  }
  
  export default About;