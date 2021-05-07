import React from 'react';
import {connect} from 'react-redux';
import {deleteTaskinProg,addToCompTask} from '../store/action'
const InProg =(props)=>{

    const onClickAdd=(ix)=>{
        let data = props.inProg
        let newData = data.filter((d,i)=> i !== ix);
        //console.log(newData)
        props.deleteTaskinProg(newData);
        let compTask = props.inProg[ix]
        props.addToCompTask(compTask);
    }
    const onClickDelete=(ix)=>{
        let data = props.inProg
        let newData = data.filter((d,i)=> i !== ix);
        //console.log(newData)
        props.deleteTaskinProg(newData);
    }
    return(
        <>
        <h1>In Progress List</h1>
        {props.inProg.map((t,i)=>(
             <div className="ui middle aligned divided list" key={i}>
             <div className="item">
                 <div className="content">
                     {t.message}
                 </div>
                 <div className="left floated content">
                 <div className="ui primary button" onClick={()=>onClickAdd(i)}>TASK COMPLETE</div>
                 <div className="ui red button" onClick={()=>onClickDelete(i)}>Delete</div>
                 </div>
             </div>
         </div>
        ))}
        </>
    );
 
   
}

const mapStateToProps =state =>{
    
    return{
        inProg: state.datastatus.inProgress
    }
}
export default connect(mapStateToProps,{deleteTaskinProg,addToCompTask})(InProg);