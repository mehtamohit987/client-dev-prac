import * as types from "../constants/ActionTypes.js"

export function incrementFunction() {
    return {
        type: types.INCREMENT_COUNTER,
        operateWith: 1
    }
}

export function decrementFunction() {
    return {
        type: types.DECREMENT_COUNTER,
        operateWith: 1        
    }
    
}