import * as types from "../constants/ActionTypes.js"

var actionCreators = {
    increment: function () {
        return { type: types.INCREMENT_COUNTER };
    },
    decrement: function () {
        return { type: types.DECREMENT_COUNTER };
    }
};
// APIs
// Step 4. Define the async function which returns promise
function IncrementAsync() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, 3000);
    });
}

export const startIncrementAsync = () => {
    return (dispatch, getState) => {
        console.log("dispatch");
        return IncrementAsync()
            .then(() => {
                console.log("dispatch");

                dispatch({ type: types.INCREMENT_COUNTER })
            })
            .catch(err => {
                console.log(err);
                dispatch({ type: types.DEFAULT });
            }
            );;
    };
}
export { actionCreators };

