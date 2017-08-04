import React from 'react';
import {addTask} from '../actions/actionCreators'

const AddTask = ({dispatch}) => {
    let input;
    return <div>
            <input ref={node => {input = node;}} />
            <button onClick={()=>{if (input.value) dispatch(addTask(input.value)); input.value='';}}>Add Task</button>
        </div>;
};

export default AddTask;