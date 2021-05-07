import { combineReducers } from 'redux';
const initialState ={
     completed : [],
    inProgress: [], 
    asignTask: []
}
const datastatus =(state = initialState,action)=>{
        switch(action.type){
            case "ADD_ITEM":
                return {
                    ...state,
                asignTask:[
                    ...state.asignTask,
                    {
                     message: action.payload  
                    },
                ],
                }
            case "DELETE_TASK_ASSIGN":
                return {
                    ...state,
                    asignTask: action.payload
                }
            case "ADD_IN_PROGRESS":
                return{
                    ...state,
                    inProgress:[ 
                    ...state.inProgress,
                    action.payload
                    ]
                }
            case "DELETE_TASK_IN_PROG":
                return{
                    ...state,
                     inProgress:action.payload
                }

            case "ADD_IN_COMPLETE":
                console.log(action.payload)
                return{
                    ...state,
                    completed:[
                        ...state.completed,
                        action.payload
                        ]
                }
            default:
                return state;
        }

    }

export default combineReducers({
    datastatus,
   
});