import React from 'react'
import "./App.css"


function Input({id, Change, check, val}) {
    let disable = val==="";
    return (<input className="cbx" type="checkbox" onChange={()=>Change(id)} disabled={disable} defaultChecked={check}></input>)
  }
export default Input;  