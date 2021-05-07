import React from 'react'
import {connect} from 'react-redux'
const CompTask = (props) =>{
return(
    <>
    <h1>Task completed</h1>
    {props.completed.map((t,i)=>(
        <div className="ui middle aligned divided list" key={i}>
             <div className="item">
                 <div className="content">
                     {t.message}
                 </div>
                 <div className="left floated content">
                 {/* <div className="ui primary button" onClick={()=>onClickAdd(i)}>TASK COMPLETE</div>
                 <div className="ui red button" onClick={()=>onClickDelete(i)}>Delete</div> */}
                 </div>
             </div>
         </div>
    ))}
</>
)
}
const mapStateToProps =state =>{
    return{
        completed: state.datastatus.completed
    }
}
export default connect(mapStateToProps)(CompTask);