import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Staffs} from './staffs';
import {Departments} from './departments';
import {Salary} from './salarys';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            staffs:Staffs,
            departments:Departments,
            salarys:Salary,
        }),
        applyMiddleware(thunk, logger),
    )

    return store;
}
