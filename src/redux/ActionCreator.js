import * as ActionTypes from './ActionTypes';
import {baseUrl} from '../shared/baseUrl';

export const fetchStaffs = () => (dispatch) => {
    dispatch(staffsLoading(true))

    return fetch(baseUrl + 'staffs')
    .then(response =>{
        if(response.ok){
            return response;
        }
        else {
            var error = new Error('Error' + response.status +':' +response.statusText)
            error.response = response;
            throw error;
        }
    },
    error => {
        var errMess = new Error(error.message)
        throw errMess;
    })
    .then(response => response.json())
    .then(staffs => dispatch(addStaffs(staffs)))
    .catch(error => dispatch(staffsFailed(error.message)))
}

export const staffsLoading = () =>({
    type:ActionTypes.STAFFS_LOADING
})

export const staffsFailed = (errMess) =>({
    type:ActionTypes.STAFFS_FAILED,
    payload:errMess,
})

export const addStaffs =(staffs) =>({
    type:ActionTypes.ADD_STAFFS,
    payload:staffs,
})

export const fetchDeparts = (dispatch) => {
    dispatch(departsLoading(true))

    return fetch(baseUrl + 'departs')
    .then(response => {
        if(response.ok){
            return response
        }
        else{
            var error = new Error('Error' + response.status +':' +response.statusText);
            error.response=response;
            throw error;
        }
    },
    error => {
        var errMess = new Error(error.message)
        throw errMess
    })
    .then(response => response.json())
    .then(departs => dispatch(addDeparts(departs)))
    .catch(error => dispatch(departsFailed(error.message)))
}

export const departsLoading = () =>({
    type:ActionTypes.DEPARTS_LOADING
})

export const departsFailed =(errMess) =>({
    type:ActionTypes.DEPARTS_FAILED,
    payload:errMess
})

export const addDeparts = (departs) =>({
    type:ActionTypes.ADD_DEPARTS,
    payload:departs,
})

export const fetchSalary = (dispatch) =>{
    dispatch(salarysLoading(true))

    return fetch(baseUrl +  'salary')
    .then(response => {
        if(response.ok){
            return response
        }
        else{
            var error = new Error('Error' + response.status + ':' + response.statusText)
            error.response = response;
            throw error
        }
    },
    error => {
        var errMess = new Error(error.message)
        throw errMess
    })
    .then(response => response.json())
    .then(salary => dispatch(addSalarys(salary)))
    .catch(error => dispatch(salarysFailed(error.message)))
}

export const salarysLoading = () =>({
    type:ActionTypes.SALARYS_LOADING
})

export const salarysFailed = (errMess) =>({
    type:ActionTypes.SALARYS_FAILED,
    payload:errMess
})

export const addSalarys = (salary) =>({
    type:ActionTypes.ADD_SALARYS,
    payload:salary
})
