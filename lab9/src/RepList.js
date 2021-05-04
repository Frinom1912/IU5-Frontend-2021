import React from 'react'
import "./App.css"
import { useState, useEffect} from 'react';

function RepContent({data, num}) {
    return(
        <div className="container container-small">
            <p>
                <span className="res">{num+1}) </span>
                <a className="res" href={data.html_url}>{data.name}</a>
            </p>
            <p>
              <span className="res small">Последнее обновление: </span>
              <span className="res small bold">{data.updated_at.slice(0, 10)}</span>
            </p>
            <p>
              <span className="res small">Форк: </span>
              <i style={{color: data.fork === false ? "red" : "green"}} className={data.fork === false ? "fa fa-times" : "fa fa-check"}></i>
            </p>
            <p>
              <span className="res small">Подписчиков: </span>
              <span className="res small bold">{data.subscribers_count}</span>
            </p>
            { !data.language ? <></> : <p><span className="res small">ЯП: </span><span className="res small bold">{data.language}</span></p>}
        </div>
    );
}

function Rep({rep, num}) {
    const [jobsDone, setJobs] = useState(false);
    const [rep_info, setRep] = useState({});
    useEffect(() => {
        fetch(rep,
          {
            Authorization: process.env.REACT_APP_KEY,
          })
          .then((data) => {
            if(data.status === 200)
              return data.json();
            else {
              return {};
            }
          })
          .then((data) => {
            setRep(data);
            setJobs(true);
          })
    })
    return (
        jobsDone ? <RepContent data={rep_info} num={num}/> : <div className="container container-small"><div className="lds-spinner-small"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div>
    );
  }

function RepList({reps}) {
    const [arr, setArr] = useState(reps)
    return (
        <div>
            {arr.map((el, ind) => (
                <Rep rep={el.url} num={ind}/>
            ))}
        </div>
    );
  }
  
  export default RepList;