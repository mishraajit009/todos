import {ADD_ITEM,DELETE_TASK_ASSIGN,ADD_IN_PROGRESS,DELETE_TASK_IN_PROG,ADD_IN_COMPLETE} from './types'

export const  addItem= (item)=>{
    return {
        type:ADD_ITEM,
        payload: item
    };
};
export const deleteTaskassign = (item)=>{
    return{
        type: DELETE_TASK_ASSIGN,
        payload: item
    };
};
export const addToinprogress =(item)=>{
    return{
        type:  ADD_IN_PROGRESS,
        payload: item
    }
}

export const deleteTaskinProg = (item)=>{
    return{
        type: DELETE_TASK_IN_PROG,
        payload: item
    }
}

export const addToCompTask = (item)=>{
    return{
        type: ADD_IN_COMPLETE,
        payload: item
    }
}