import React from 'react'
import "./App.css"

export function UpdateLocalStorage(user, exists) {
    localStorage.clear();
    localStorage.setItem(`username`, user);
  }
  
  export function ClearLocalStorage() {
    localStorage.clear();
  }
  
  export function Error({user}) {
    return (
      <div style={{margin: "0px 5% 0px 5%", textAlign: "center"}} className="res">Ошибка, пользователя с логином {<strong>{user}</strong>} не существует! Попробуйте еще раз.</div>
    );
  }

