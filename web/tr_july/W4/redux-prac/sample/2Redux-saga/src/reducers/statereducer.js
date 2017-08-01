import * as actionTypes from "../constants/ActionTypes.js";

const initialState = {
    counter: 0
}

export default function stateReducer(state = initialState, action) {
 console.log(action.type);
    switch (action.type) {        
        case actionTypes.INCREMENT_COUNTER:
            console.log(state);
            return Object.assign({}, ...state, { counter: state.counter + 1 });
        case actionTypes.DECREMENT_COUNTER:
            return Object.assign({}, ...state, { counter: state.counter - 1 });
        default:
            return Object.assign({}, state);
    }

}