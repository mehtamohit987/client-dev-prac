const logger = store => next => action => {
    console.log('dispatching', action);
    let result = next(action);
    console.log("next state", store.getState());
    return result;
};

const crashReporter = store => next => action => {
    try { return next(action); }
    catch (err) { console.log("error: ", err); }
};
export {logger, crashReporter};