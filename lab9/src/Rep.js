import React from 'react'
import "./App.css"
import { useState} from 'react';

function Rep({rep}) {
    return(
        <div className={rep.id}></div>
    );
  }
  
  export default Rep;