import React from 'react';

export const Task = ({onC0Click, onC1Click, onC2Click, completed, checked, text}) => <li><input type="checkbox" onChange={onC0Click} checked={checked} /><span>{text}</span><input type="checkbox" onChange={onC1Click} checked={completed} /><input type="button" value="Delete" onClick={onC2Click}/></li>;
const TaskList = ({tasks, onTaskCheck, onTaskClick, onTaskRemove, onMultiComplete, onMultiRemove}) => <div><ul>{tasks.map(task => <Task key={task.id} {...task} onC0Click={()=>onTaskCheck(task.id)} onC1Click={()=>onTaskClick(task.id)} onC2Click={()=>onTaskRemove(task.id)}></Task>)}</ul>
                                                                    <input type="button" value="Mark Complete" onClick={onMultiComplete}/>{' '}<input type="button" value="Delete" onClick={onMultiRemove}/>
                                                                    </div>;
export default TaskList;
