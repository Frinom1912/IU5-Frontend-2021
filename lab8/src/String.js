import React from 'react'
import "./App.css"

const Text = "Введите задачу";

function String({id, val, check, AddNear, SaveVal}) {
    let styles = "String uncrossed";
    if (check === 1) {
      styles = "String crossed"
    }
    return (<textarea type="text" id={id+"t"} onKeyDown={AddNear} onChange={SaveVal} className={styles}  placeholder={Text} value={val}></textarea>)
  }
export default String;  