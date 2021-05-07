import React from 'react'
import {connect} from 'react-redux'
import {deleteTaskassign,addToinprogress} from '../store/action/index.js'
const Incompletelist=(props)=>{
    
    const onClickAdd=(ix)=>{
        let data = props.incompleteTodos
        let newData = data.filter((d,i)=> i !== ix);
        //console.log(newData)
        props.deleteTaskassign(newData) ;
        let inprog = props.incompleteTodos[ix];
        props.addToinprogress(inprog)

    }
    const onClickDelete =(ix)=>{
        let data = props.incompleteTodos
        let newData = data.filter((d,i)=> i !== ix);
        //console.log(newData)
        props.deleteTaskassign(newData) ;
    }
    return(
        <>
         <h1>Assign Task</h1>
            {
                props.incompleteTodos.map((t,i) =>{
               
                 /*   return (<li  key={i}>{t.message} <button className="ui button primary">Start Work</button> <button className="ui red button">Delete</button></li>) */
                 return(
                    <div className="ui middle aligned divided list" key={i}>
                        <div className="item">
                            <div className="content">
                                {t.message}
                            </div>
                            <div className="left floated content">
                            <div className="ui primary button" onClick={()=>onClickAdd(i)}>START JOB</div>
                            <div className="ui red button" onClick={()=>onClickDelete(i)}>Delete</div>
                            </div>
                        </div>
                    </div>
                 );
                })
            }
        </>
    );
}
const mapStateToProps =state =>{
    
    return{
        incompleteTodos: state.datastatus.asignTask
    }
}
export default connect(mapStateToProps,{deleteTaskassign,addToinprogress})(Incompletelist);