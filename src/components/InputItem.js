import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../store/action'

const InputItem = (props)=>{
   const onFormSubmit=(e)=>{
        e.preventDefault();
        let input =e.target.userInput.value
        console.log(input)
        props.addItem(input)
        e.target.userInput.value = "";
    }
    return(
    <>
        <div className="ui container">
            <form className="ui form"
                  onSubmit={onFormSubmit}>
                <div className="field">
                    <label>Enter Task</label>
                    <input type="text" name="userInput"  placeholder="Enter  Task" />
                </div>
                <button className="ui button primary" type="submit">Submit</button>
            </form>
        </div>
    </>
    )
}

  

export default connect(null,{addItem})(InputItem);