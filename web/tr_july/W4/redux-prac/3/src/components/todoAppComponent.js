import React from 'react';
import Links from './linksComponent';
import AddTaskContainer from '../containers/addTaskContainer';
import FilteredTaskListContainer from '../containers/filteredTaskListContainer';

const TodoApp = () => (
  <div>
    <AddTaskContainer />
    <FilteredTaskListContainer />
    <Links />
  </div>
);

export default TodoApp;
