import React from 'react'
import InputItem from './InputItem';
import IncompleteList from './IncompleteList.js'
import Inprog from './InProg.js'
import CompTask from './CompTask.js'
import './App.css'
const App =(props)=>{
    return(
        <>
        <div className="ui grid"><div className="sixteen wide column" ><h1 className="headers" text-align="center">TODO APP</h1></div></div>
            <InputItem />
            <div className="ui grid container">
             <div className="five wide column"><IncompleteList/></div>
             <div className="five wide column"><Inprog/></div>
             <div className="five wide column"><CompTask /></div>
            </div>
        </>
    )
}


export default App;