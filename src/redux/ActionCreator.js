import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';

///////////////update
export const updateStaffs = (staff) => (dispatch) => {
    return fetch (baseUrl + 'staffs',{
        method:'PATCH',
        // body:JSON.stringify(staff),
        headers: { "Content-Type": "application/json" },
        credentials: "same-origin",
    })
    .then((response) => {
        if(response.ok)
            return response
        else {
            var error = new Error('Error' + response.status +':' + response.statusText)
            error.response = response;
            throw error
        }
    },
    (error) => {
        var errMess = new Error(error.message);
        throw errMess;
    })
    .then((response) => response.json())
    .then((response) => {dispatch(addStaffs(response));
        window.location.replace("/staff");})
    .catch((error) => { 
        console.log("ERROR MESSAGE " + error.message);
        alert("Your POST newstaff could not be posted\nError: " + error.message);
    })
}

///////////xóa nhân viên 
export const deleteStaff = (id) => (dispatch) =>{
    console.log('base', baseUrl + 'staffs/' + id)
    return (
        fetch(baseUrl + 'staffs/' + id, {
        method:"DELETE",
        // body: JSON.stringify(staff),
        headers: { "Content-Type": "application/json" },
        credentials: "same-origin",
    })
    .then((response) => {
        if(response.ok)
            return response
        else {
            var error = new Error('Error' + response.status +':' + response.statusText)
            error.response = response;
            throw error
        }
    }, 
    (error) => {
        var errMess = new Error(error.message)
        throw errMess
    })
    .then((response) => response.json())
    .then((response) => {dispatch(addStaffs(response));
        window.location.replace("/staff");})
    .catch((error) => { 
        console.log("ERROR MESSAGE " + error.message);
        alert("Your POST newstaff could not be posted\nError: " + error.message);
    })
    )
}

/////////////////thêm nhân viên
export const postStaff = (staff) => (dispatch) => {
    console.log('asssssssssssssssss', staff)
    return fetch(baseUrl + "staffs", {
        method: "POST",
        body: JSON.stringify(staff),
        headers: { "Content-Type": "application/json" },
        credentials: "same-origin", //gửi thông tin đăng nhập nếu URL yêu cầu có cùng nguồn gốc với tập lệnh gọi
    })
        .then(
            (response) => {
                if (response.ok) {
                    return response;
                } else {
                    var error = new Error(
                        "Error " + response.status + " :" + response.statusText
                    );
                    error.response = response;
                    throw error;
                }
            },
            (error) => {
                var errmess = new Error(error.message);
                throw errmess;
            }
        )
        .then((response) => response.json())
        .then((response) => dispatch(addStaffs(response)))
        .catch((error) => {
            console.log("ERROR MESSAGE " + error.message);
            alert("Your POST newstaff could not be posted\nError: " + error.message);
        });
};

////////////hiển thị nhân viên
export const fetchStaffs = (staff) => (dispatch) => {
    dispatch(staffsLoading(true));

    return fetch(baseUrl  + "staffs" )
        .then(
            (response) => {
                if (response.ok) {
                    return response;
                } else {
                    var error = new Error(
                        "Error" + response.status + response.statusText
                    );
                    error.response = response;
                    throw error;
                }
            },
            (error) => {
                var errmess = new Error(error.message);
                throw errmess;
            }
        )
        .then((response) => response.json())
        .then((response) => dispatch(addStaffs(response)))
        .catch((error) => dispatch(staffsFailed(error.message)));
};

export const staffsLoading = () => ({
    type: ActionTypes.STAFFS_LOADING
})

export const staffsFailed = (errMess) => ({
    type: ActionTypes.STAFFS_FAILED,
    payload: errMess,
})

export const addStaffs = (staffs) => ({
    
    type: ActionTypes.ADD_STAFFS,
    payload: staffs,

})

//////////////hiển thị phòng ban
export const fetchDeparts = () => (dispatch) => {
    dispatch(departsLoading(true))

    return fetch(baseUrl + 'departments')
        .then(response => {
            if (response.ok) {
                return response;
            }
            else {
                var error = new Error('Error' + response.status + ':' + response.statusText);
                error.response = response;
                throw error;
            }
        },
            error => {
                var errMess = new Error(error.message)
                throw errMess
            })
        .then(response => response.json())
        .then(departs => { return dispatch(addDeparts(departs)) })
        .catch(error => dispatch(departsFailed(error.message)))
}

export const departsLoading = () => ({
    type: ActionTypes.DEPARTS_LOADING
})

export const departsFailed = (errMess) => ({
    type: ActionTypes.DEPARTS_FAILED,
    payload: errMess
})

export const addDeparts = (departments) => ({
    type: ActionTypes.ADD_DEPARTS,
    payload: departments,
})


//////////////////hiển thị bảng lương
export const fetchSalary = () => (dispatch) => {
    dispatch(salarysLoading(true))

    return fetch(baseUrl + 'salary')
        .then(response => {
            if (response.ok) {
                return response
            }
            else {
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

export const salarysLoading = () => ({
    type: ActionTypes.SALARYS_LOADING
})

export const salarysFailed = (errMess) => ({
    type: ActionTypes.SALARYS_FAILED,
    payload: errMess
})

export const addSalarys = (salary) => ({
    type: ActionTypes.ADD_SALARYS,
    payload: salary
})
