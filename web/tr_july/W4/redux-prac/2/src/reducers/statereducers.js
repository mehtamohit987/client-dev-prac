import * as actionTypes from "../constants/ActionTypes.js"

const initialState = {
    counter: 0
};

export default function stateReducer (state=initialState, action) {
    switch (action.type) {
        case actionTypes.INCREMENT_COUNTER:
        // console.log(state);
        return Object.assign({}, ...state, {counter: state.counter + 1});
        case actionTypes.DECREMENT_COUNTER:
        // console.log(state);
        return Object.assign({}, ...state, {counter: state.counter - 1});
        case actionTypes.RESET_COUNTER:
        // console.log((state));
        return Object.assign({},...state,{counter: 0});
        case actionTypes.API_FAILURE:
        console.log('failure');
        return state;
        case actionTypes.API_SUCCESS:
        console.log('success');
        return state;
        default:
        // console.log((state));
        return state;
    }
}
