import TaskList from '../components/taskListComponent';
import {checkItemAsync, toggleTaskStatusAsync, removeTaskAsync, completeMultipleTaskAsync, removeMultipleTaskAsync} from '../actions/actionCreators';
import {connect} from "react-redux";

const getFilteredTasks = (tasks, filter) => {console.log(tasks, filter);switch(filter){case 'SHOW_ALL': return tasks; case 'SHOW_ACTIVE': return tasks.filter(task=>!task.completed); case 'SHOW_COMPLETED': return tasks.filter(task=>task.completed);} }

const FilteredTaskListContainer = connect (state => {return {tasks: getFilteredTasks(state.state.tasks, state.state.filter)} } , dispatch => {return {onTaskCheck: id=>dispatch(checkItemAsync(id)), onTaskClick: id=>dispatch(toggleTaskStatusAsync(id)), onTaskRemove: id=>dispatch(removeTaskAsync(id)),
                                                                                                                                            onMultiComplete: id=>dispatch(completeMultipleTaskAsync()), onMultiRemove: id=>dispatch(removeMultipleTaskAsync())
                                                                                                                                        }} ) (TaskList);

export default FilteredTaskListContainer;
