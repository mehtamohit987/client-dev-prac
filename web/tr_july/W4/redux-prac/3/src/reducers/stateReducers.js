import * as actionTypes from '../constants/actionTypes'
import {default as uuidv4} from 'uuid/v4';
import {combineReducers} from 'redux';
import {completeTask} from '../actions/actionCreators';

const initialStateTask = {};
const initialStateTaskList = [];
const initialStateVisbilityFilter = 'SHOW_ALL';

export const taskReducer = (state=initialStateTask, action) => {
    if ( (!action) || (Object(action) !== action) || (!('type' in action)) ) return state;
    switch (action.type) {
        case actionTypes.ADD_TASK: return { id: ('id' in action) ? action.id : uuidv4(), text: ('text' in action && action.text) ? action.text : '', completed: false, checked: false };
        case actionTypes.TOGGLE_TASK_STATUS: return (state.id === action.id) ? { ...state, completed: !state.completed } : state;
        case actionTypes.CHECK_ITEM: return (state.id === action.id) ? { ...state, checked: !state.checked } : state;
        case actionTypes.COMPLETE_TASK: return (state.checked) ? { ...state, completed: true, checked: false } : state;
        default: return state;
    }
};
export const taskListReducer = (state=initialStateTaskList, action) => {
    if ( (!action) || (Object(action) !== action) || (!('type' in action)) ) return state;
    switch (action.type) {
        case actionTypes.ADD_TASK: return [...state, taskReducer(undefined, action)];
        case actionTypes.REMOVE_TASK: return [...state.slice(0, state.findIndex( ob => ob.id===action.id ) ), ...state.slice(state.findIndex( ob => ob.id===action.id ) + 1)];
        case actionTypes.TOGGLE_TASK_STATUS: return state.map( (t) => taskReducer(t,action) );
        case actionTypes.CHECK_ITEM: return state.map( (t) => taskReducer(t,action) );
        case actionTypes.COMPLETE_MULTIPLE_TASK: return state.map( (t) => taskReducer(t, completeTask()) );
        case actionTypes.REMOVE_MULTIPLE_TASK: return state.filter( (t) => !t.checked );
        default: return state;
    }
};

export const filterReducer = (state=initialStateVisbilityFilter, action) => {
    if ( (!action) || (Object(action) !== action) || (!('type' in action)) ) return state;
    switch (action.type) {
        case actionTypes.SET_FILTER: return action.filter;
        default: return state;
    }
};
const stateReducers = combineReducers ({
    tasks: taskListReducer,
    filter: filterReducer
});
export default stateReducers;