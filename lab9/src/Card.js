import React from 'react'
import "./App.css"
import { useState} from 'react';
import RepList from "./RepList.js"

function Card({userlist, replist}) {
    const [textButton, setText] = useState("Показать ID");
    const [show, setShow] = useState(false); 
    const [repShow, setReps] = useState(false);
    const ShowID = () => {
      setText(!show ? "Скрыть ID" : "Показать ID");
      setShow(!show);
    };
  
    return(
      <div style={{display:"flex", flexDirection: "column", width: "100%", alignItems: "center"}}>
        <div className="Card">
          <img alt="" className="avatar" src={userlist.avatar_url}></img>
          <div style={{display:"flex", flexDirection: "column"}}>
            <p>
              <span className="res">Пользователь: </span>
              <a className="res bold" href={userlist.html_url}>{userlist.login}</a>
            </p>
            {(userlist.name) ? (<p><span className="res">Имя: </span><span className="res bold">{userlist.name}</span></p>) : <></>}
            <p>
              <span className="res small">Уровень доступа: </span>
              <span className="res small bold">{userlist.type}</span>
            </p>
            <p>
              <span className="res small">Регистрация: </span>
              <span className="res small bold">{userlist.created_at.slice(0, 10)}</span>
            </p>
            {(userlist.email) ? <p><span className="res small">Почта: {userlist.email}</span></p> : <></>}
            {(userlist.company) ? <p><span className="res small">Компания: {userlist.company}</span></p> : <></>}
            {(userlist.location) ? <p><span className="res small">Место проживания: {userlist.location}</span></p> : <></>}
            <p>
              <span className="res small">Подписчиков: </span>
              <span className="res small bold">{userlist.followers}</span>
            </p>
            <p>
              <span className="res small">Подписок: </span>
              <span className="res small bold">{userlist.following}</span>
            </p>
            <p>
              <span className="res small">Открытых репов: </span>
              <span className="res small bold">{userlist.public_repos}</span>
            </p>
            <div style={{display: "flex", alignItems: "center", width: "100%", justifyContent: "left", marginTop: "10px"}}>
              <button style={{marginTop: "0px", marginBottom: "0px"}} className="search-button" onClick={ShowID}>{textButton}</button>
              {show ? <textarea className="res small bold" value={userlist.id} style={{marginLeft: "10px"}} cols="9" rows="1" readOnly> </textarea> : <></>}
            </div>
          </div>
        </div>
        <button className="search-button" onClick={() => {setReps(!repShow)}}>Показать репозитории</button>
        {
            repShow ? <RepList reps={replist}/> : <></>
        }
      </div> 
    );
  }
  
  export default Card;