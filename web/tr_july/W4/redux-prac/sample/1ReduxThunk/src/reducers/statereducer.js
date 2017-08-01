import * as actionTypes from "../constants/ActionTypes.js";

const initialState = {
    counter: 1
}

export default function stateReducer(state = initialState, action) {

    switch (action.type) {
        case actionTypes.INCREMENT_COUNTER:
        console.log(state);
            return Object.assign({}, ...state, { counter: state.counter + 1 });
           // console.log(obj);
           // return obj;
        case actionTypes.DECREMENT_COUNTER:
            return Object.assign({}, ...state, { counter: state.counter - 1 });
          //  console.log(obj);
          //   return obj;
        default:
            return initialState;
    }

}
