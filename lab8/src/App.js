import './App.css';
import React from 'react';
import String from "./String.js"
import Input from "./Input"

const list = {
  id: 0, 
  val: "",
  check: 0
}

function App() {
  const [strings, setString] = React.useState([]);
  function UpdateLocalStorage(arr) {
    localStorage.clear();
    arr.forEach((element, ind) => {
      localStorage.setItem(`id ${ind.toString()}`, element.id);
      localStorage.setItem(`val ${ind.toString()}`, element.val);
      localStorage.setItem(`check ${ind.toString()}`, element.check);
    });
  }

  let newArr1 = [];
  if(strings.length === 0) {
    if(localStorage.length === 0)
      setString([list]);
    else {
      for(let ind = 0, lenStr = 0; true; ind++) {
        if(Number(lenStr) === Number(localStorage.length / 3)) 
          break;
        newArr1.push({id:Number(localStorage.getItem(`id ${lenStr.toString()}`)), val:localStorage.getItem(`val ${lenStr.toString()}`), check:Number(localStorage.getItem(`check ${lenStr.toString()}`))}); 
        lenStr++;
      }
      
      setString(newArr1);
    }
  }

  function getMaxId(arr) {
    let res = arr[0].id;
    for(let i = 1; i<arr.length; i++)
    if(arr[i].id > res)
    res = arr[i].id;
    return res;
  }
  
  function Add() {
    if(strings.length !== 0) {
      let newArr = [...strings, { id: getMaxId(strings)+1, val: "", check: 0}];
      setString(newArr);
    }
    else {
      setString([{ id: 0, val: "", check: 0}]);
    }
  }

  function AddNear(event) {
    if(event.key === "Enter") {
      event.preventDefault();
      let ind = event.target.id;
      let newArr = [];
      strings.forEach(element => {
        newArr.push(element);
        if(element.id === parseInt(ind))
          newArr.push({ id: getMaxId(strings)+1, val: "", check: 0})
      });
      setString(newArr);
    }
  }
  
  function SaveVal(event) {
    let ind = event.target.id;
    ind = parseInt(ind.slice(0, -1));
    let newArr = strings.map((el) => {
      if (ind === el.id) {
        return {id: el.id,val: event.target.value, check: el.check};
      }
      else return {id: el.id,val: el.val, check: el.check};
    })
    setString(newArr);
    UpdateLocalStorage(newArr);
  }

  function Change(ind) {
    let element = document.getElementById(ind.toString());
    let flag;
    if(element.childNodes[1].value !== "")
    {
      if(element.childNodes[0].checked) {
        element.childNodes[1].style.textDecoration = "line-through";
        element.childNodes[1].style.color = "grey";
        flag = 1;
      }
      else {
        element.childNodes[1].style.textDecoration = "none";
        element.childNodes[1].style.color = "black";
        flag = 0;
      }
    }
    let newArr = strings.map((el) => {
      if (ind === el.id) {
        return {id: el.id,val: el.val, check: flag};
      }
      else return {id: el.id,val: el.val, check: el.check};
    })
    setString(newArr);
    UpdateLocalStorage(newArr);
  }


  function Delete(ind) {
    const newList = strings.filter((str) => str.id !== ind);
    setString(newList);
    UpdateLocalStorage(newList);
  }


  return (
    <div className="App">
      <header className="Title">
        ToDoList
      </header>
      <form className="List" id="form">
        <ul>
          {strings.map((str) => (
            <li key={str.id} id={str.id}>
              <Input id={str.id} Change={Change} check={str.check} val={str.val} />
              <String id={str.id} val={str.val} check={str.check} AddNear={AddNear} SaveVal={SaveVal}/>
              <button type="button" className="DeleteLine" onClick={()=>Delete(str.id)}><i className="fa fa-close"></i></button>
            </li>
          ))}
        </ul>
      </form>
      <button type="button" className="AddLine" onClick={()=>Add()}><i className="fa fa-plus"></i>{' '}Добавить строку</button>
      <span className="AddLine">Для добавления задачи в середине списка, нажмите enter, находясь в одной из задач</span>
      <span className="AddLine">Пустые задачи будут удалены после перезагрузки страницы</span>
    </div>
  );
}

export default App;