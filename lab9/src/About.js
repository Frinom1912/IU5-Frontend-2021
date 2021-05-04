import React from 'react'
import "./App.css"
import Card from "./Card"
import {ClearLocalStorage, GetURL} from "./Funcs"
import {Error} from "./Funcs"
import {useEffect, useState} from 'react';
import {useHistory, useRouteMatch} from 'react-router-dom';

function About({user}) {
    const [username, setUser] = useState({});
    const [reps, setReps] = useState({});
    const h = useHistory();
    const [jobsDone, setJobs] = useState(false);
    const [cleenUser, setC] = useState(false);
    if(user === "" && localStorage.length !== 0) {
      user = localStorage.getItem(`username`)
    }
    const url = GetURL(useRouteMatch().url);
    const BackClick = () => {
      setUser({});
      ClearLocalStorage();
      h.push(`${url}/`);
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
          fetch(data.repos_url,
            {
              Authorization: process.env.REACT_APP_KEY,
            })
          .then((data_r) => {
            if(data_r.status === 200) {
              console.log(data_r);
              return data_r.json();
            }
            else {
              return {};
            }
          })
          .then((data_r) => {
            setReps(data_r);
            setJobs(true);
          })
  
        });
      }
      else {
        setC(true);
      }
    }, [user]);

    return (
      <div id="cont" className="container container-huge" style={{height: "auto"}}>
        {
            cleenUser ? <Error user={user}/> : (jobsDone ? <Card userlist={username} replist={reps}/> : <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>)
        }
        <button className="search-button" style={{marginBottom: "30px"}} onClick={BackClick}>Вернуться</button>
      </div>
    );
  }
  
  export default About;