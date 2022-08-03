import * as ActionTypes from './ActionTypes';

export const Departments = (state ={
    isLoading:false,
    errMess:null,
    departments:[]
},action)=> {
    switch(action.type) {
        case ActionTypes.DEPARTS_LOADING:
            return{...state, isLoading:true, errMess:null, departments:[]}
        case ActionTypes.DEPARTS_FAILED:
            return{...state, isLoading:false, errMess:action.payload, departments:[]}
        case ActionTypes.ADD_DEPARTS : 
            return {...state, isLoading:false, errMess:null, departments:action.payload}
        default:
            return state;
    }
}