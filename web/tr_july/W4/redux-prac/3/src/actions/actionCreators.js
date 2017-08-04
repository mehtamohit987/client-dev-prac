import * as types from '../constants/actionTypes'
import {default as uuidv4} from 'uuid/v4';

export const addTask = text=>{return {type: types.ADD_TASK, id: uuidv4(), text};};
export const removeTask = id=>({type: types.REMOVE_TASK, id});
export const removeTaskAsync = id=>({type: types.REMOVE_TASK_ASYNC, id});
export const toggleTaskStatus = id=>({type: types.TOGGLE_TASK_STATUS, id});
export const toggleTaskStatusAsync = id=>({type: types.TOGGLE_TASK_STATUS_ASYNC, id});
export const checkItem = id=>({type: types.CHECK_ITEM, id});
export const checkItemAsync = id=>({type: types.CHECK_ITEM_ASYNC, id});
export const setFilter = filter=>({type: types.SET_FILTER, filter: filter});
export const completeTask = ()=>({type: types.COMPLETE_TASK});
export const completeMultipleTask = ()=>({type: types.COMPLETE_MULTIPLE_TASK});
export const completeMultipleTaskAsync = ()=>({type: types.COMPLETE_MULTIPLE_TASK_ASYNC});
export const removeMultipleTask = ()=>({type: types.REMOVE_MULTIPLE_TASK});
export const removeMultipleTaskAsync = ()=>({type: types.REMOVE_MULTIPLE_TASK_ASYNC});
