import {createStore, combineReducers} from "redux"; //combineReducers
import React from 'react';
import ReactDOM from 'react-dom';

// import deepFreeze from 'deep-freeze';
// import expect from 'expect';

const todo = (state={}, action) => {
    switch (action.type) {
        case 'ADD_TODO':
        return {
                id: action.id,
                text: action.text,
                completed: false
            };
        case 'TOGGLE_TODO':
        if(state.id!==action.id)return state; return {...state, completed:true};
        default: return state;
    }
}
const todos = (state=[], action)  => {
    switch (action.type) {
        case 'ADD_TODO':
        return [
            ...state,
            todo(undefined, action)
        ];
        case 'TOGGLE_TODO':
        return state.map( (t) => todo(t,action) );
        default:
        return state;
    }
};
const visibilityFilter = (state='SHOW_ALL', action)=>{
    switch (action.type) {
        case 'SET_VISIBILITY_FILTER': return action.filter;
        default: return state;
    }
};
// const todoApp = (state = {}, action)=> {
//     return {
//         todos: todos(state.todos, action),
//         visibilityFilter: visibilityFilter(state.visibilityFilter, action)
//     }
// }

// const combineReducers  = (reducers) => {
//     return (state={}, action) => {
//         return Object.keys(reducers).reduce(
//             (nextState, key) =>{
//                 nextState[key] = reducers[key](state[key], action);
//                 return nextState
//             }, {});
//     };
// }
const todoApp = combineReducers ({
    todos,
    visibilityFilter
})
const store = createStore(todoApp);




const Link = ({active, onClick, children}) => {if(active)return <span>{children}</span>; return <a href="#" onClick={e=>{e.preventDefault(); onClick();}} >{children}</a>;};
class FilterLink extends React.Component {  //container of presentational component Link
    componentDidMount () {
        this.unsubscribe = store.subscribe(()=>this.forceUpdate());
    }
    componentWillUnMount () {
        this.unsubscribe = this.unsubscribe();
    }
    render () {
        const props = this.props;
        const state = store.getState();
        return <Link active={props.filter===state.visibilityFilter} onClick={()=>store.dispatch({type: 'SET_VISIBILITY_FILTER', filter: props.filter})} >{props.children}</Link>;
    }
}
const getVisibleTodos = (todos, filter) => {switch(filter){case 'SHOW_ALL': return todos; case 'SHOW_ACTIVE': return todos.filter(todo=>!todo.completed); case 'SHOW_COMPLETED': return todos.filter(todo=>todo.completed);} }


let nextTodoId = 0;
const Todo = ({onClick, completed, text}) => <li onClick={onClick} style={{textDecoration: completed ? 'line-through':'none'}}>{text}</li>
const TodoList = ({todos, onTodoClick}) => <ul>{todos.map(todo => <Todo key={todo.id} {...todo} onClick={()=>onTodoClick(todo.id)}></Todo>)}</ul>

class VisibleTodoList extends React.Component {
    componentDidMount () {
        this.unsubscribe = store.subscribe(()=>this.forceUpdate());
    }
    componentWillUnMount () {
        this.unsubscribe = this.unsubscribe();
    }
    render () {
        const props = this.props;
        const state = store.getState();
        return <TodoList todos={getVisibleTodos(state.todos, state.visibilityFilter)} onTodoClick={id=>store.dispatch({type: 'TOGGLE_TODO', id}) } />
    }
}
const AddTodo = ({onAddClick}) => {
    let input;
    return <div><input ref={node => {input = node;}} />
    onAddClick={text=>store.dispatch({type:'ADD_TODO', text: text, id: nextTodoId++})}
            <button onClick={()=>{store.dispatch({type:'ADD_TODO', text: input.value, id: nextTodoId++}); input.value='';}}>Add Todo</button>
        </div>;
};
const Footer = () => <p>
    Show: {' '}
    <FilterLink filter='SHOW_ALL'>All</FilterLink>{' '}
    <FilterLink filter='SHOW_ACTIVE'>Active</FilterLink>{' '}              
    <FilterLink filter='SHOW_COMPLETED'>Completed</FilterLink>
</p>;
class TodoApp extends React.Component {
    render () {
        const {todos, visibilityFilter} = this.props;
        const visibleTodos = getVisibleTodos(todos, visibilityFilter);
        return (
            <div>
                <AddTodo />
                <VisibleTodoList></VisibleTodoList>
                <Footer/>
            </div>
        );
    }
}


/*
const FilterLink = ({filter, currentFilter, onClick, children}) => {if(filter===currentFilter)return <span>{children}</span>; return <a href="#" onClick={e=>{e.preventDefault(); onClick(filter);}} >{children}</a>;};
const getVisibleTodos = (todos, filter) => {switch(filter){case 'SHOW_ALL': return todos; case 'SHOW_ACTIVE': return todos.filter(todo=>!todo.completed); case 'SHOW_COMPLETED': return todos.filter(todo=>todo.completed);} }


let nextTodoId = 0;
const Todo = ({onClick, completed, text}) => <li onClick={onClick} style={{textDecoration: completed ? 'line-through':'none'}}>{text}</li>
const TodoList = ({todos, onTodoClick}) => <ul>{todos.map(todo => <Todo key={todo.id} {...todo} onClick={()=>onTodoClick(todo.id)}></Todo>)}</ul>
const AddTodo = ({onAddClick}) => {
    let input;
    return <div><input ref={node => {input = node;}} />
            <button onClick={()=>{onAddClick(input.value); input.value='';}}>Add Todo</button>
        </div>;
};
const Footer = ({visibilityFilter, onFilterClick}) => <p>
    Show: {' '}
    <FilterLink filter='SHOW_ALL' currentFilter={visibilityFilter} onClick={onFilterClick}>All</FilterLink>{' '}
    <FilterLink filter='SHOW_ACTIVE' currentFilter={visibilityFilter} onClick={onFilterClick}>Active</FilterLink>{' '}              
    <FilterLink filter='SHOW_COMPLETED' currentFilter={visibilityFilter} onClick={onFilterClick}>Completed</FilterLink>
</p>;
class TodoApp extends React.Component {
    render () {
        const {todos, visibilityFilter} = this.props;
        const visibleTodos = getVisibleTodos(todos, visibilityFilter);
        return (
            <div>
                <AddTodo onAddClick={text=>store.dispatch({type:'ADD_TODO', text: text, id: nextTodoId++})}/>
                <TodoList todos={visibleTodos} onTodoClick={ id => store.dispatch({type:'TOGGLE_TODO', id: id}) }></TodoList>
                <Footer visibilityFilter={visibilityFilter} onFilterClick={filter=>store.dispatch({type: 'SET_VISIBILITY_FILTER', filter})}/>
            </div>
        );
    }
}*/


/*
const FilterLink = ({filter, currentFilter, children}) => {if(filter===currentFilter)return <span>{children}</span>; return <a href="#" onClick={e=>{e.preventDefault(); store.dispatch({type: 'SET_VISIBILITY_FILTER', filter});}} >{children}</a>;};
const getVisibleTodos = (todos, filter) => {switch(filter){case 'SHOW_ALL': return todos; case 'SHOW_ACTIVE': return todos.filter(todo=>!todo.completed); case 'SHOW_COMPLETED': return todos.filter(todo=>todo.completed);} }
let nextTodoId = 0;
class TodoApp extends React.Component {
    render () {
        const {todos, visibilityFilter} = this.props;
        const visibleTodos = getVisibleTodos(todos, visibilityFilter);
        return (
            <div>
                <input ref={node => {this.input = node;}} />
                <button onClick={()=>{store.dispatch({type:'ADD_TODO', text:this.input.value, id: nextTodoId++}); this.input.value='';}}>Add Todo</button>
                <ul>{visibleTodos.map(todo => <li key={todo.id} onClick={() => store.dispatch({type:'TOGGLE_TODO', id: todo.id})} style={{textDecoration: todo.completed ? 'line-through':'none'}}>{todo.text}</li>)}</ul>
                <p>
                    Show: {' '}
                    <FilterLink filter='SHOW_ALL' currentFilter={visibilityFilter}>All</FilterLink>{' '}
                    <FilterLink filter='SHOW_ACTIVE' currentFilter={visibilityFilter}>Active</FilterLink>{' '}              
                    <FilterLink filter='SHOW_COMPLETED' currentFilter={visibilityFilter}>Completed</FilterLink>
                </p>
            </div>
        );
    }
}*/







const render = () => {
    ReactDOM.render (
        <TodoApp />, // {...store.getState()} // todos={store.getState().todos}
        document.getElementById('container')
    )
};
store.subscribe(render);
render();




// debugger;
// const testAddTodo = () =>{
//     const stateBefore = [{
//         id: 0,
//         text: 'LEEE',
//         completed: false
//     },{
//         id: 1,
//         text: 'LEEavsE',
//         completed: false
//     }
//     ];
//     // const action = {
//     //     type: 'ADD_TODO',
//     //     id:0,
//     //     text: 'LEEE'
//     // };
//     const action = {
//         type: 'TOGGLE_TODO',
//         id:1,
//         text: 'LEEE'
//     };
//     const stateAfter = [{
//         id: 0,
//         text: 'LEEE',
//         completed: false
//     },{
//         id: 1,
//         text: 'LEEavsE',
//         completed: true
//     }];
//     deepFreeze(stateBefore);
//     deepFreeze(action);
//     expect(todos(stateBefore, action)).toEqual(stateAfter);
// }
// testAddTodo();

// const toggleTodo = (todo) => {
//     return  Object.assign({}, todo, {completed: true});
// }
// const testToggleTodo = () => {
//     const todoBefore = {
//         id: 0,
//         text: 'some',
//         completed: false
//     };
//     const todoAfter = {
//         id: 0,
//         text: 'some',
//         completed: true
//     };
//     deepFreeze(todoBefore);
//     expect(toggleTodo(todoBefore)).toEqual(todoAfter);
// };
// testToggleTodo();
// const addCounter = (list) => {
//     //list.push(0);
//     // list.concat([0]);
//     return [...list, 0];
// };
// const removeCounter = (list, index) => {
//     // return list.splice(index, 1);
//     return [...list.slice(0, index), ...list.slice(index+1)];
// };
// const incrementCounter = (list, index) => {
//     // list[index]++;
//     return [...list.slice(0, index), list[index]+1, ...list.slice(index+1)];
// }
// const testAddCounter = () => {
//     const listBefore = [];
//     const listAfter = [0];
//     deepFreeze(listBefore);
//     expect(addCounter(listBefore)).toEqual(listAfter);
//     console.log('passed');
// };
// const testRemoveCounter = () => {
//     const listBefore = [1,2];
//     const listAfter = [2];
//     deepFreeze(listBefore);
//     expect(removeCounter(listBefore, 0)).toEqual(listAfter);
//     console.log('passed');
// };
// const testIncrementCounter = () => {
//     const listBefore = [1,2];
//     const listAfter = [2,2];
//     deepFreeze(listBefore);
//     expect(incrementCounter(listBefore, 0)).toEqual(listAfter);
//     console.log('passed');
// };
// testAddCounter();
// testRemoveCounter();
// testIncrementCounter();
// const counter = (state=0, action) => {
//     switch(action.type) {
//         case 'INCREMENT':
//             return state+1;
//         case 'DECREMENT':
//             return state-1;
//         default:
//             return state;
//     }
// }
// const createStore = (reducer) => {
//     let state;
//     let listeners = [];
//     const getState = () => state;
//     const dispatch = (action) => {
//         state = reducer(state, action);
//         listeners.forEach(listener=>listener());
//     };
//     const subscribe = (listener) => {
//         listeners.push(listener);
//         return () => {
//             listeners = listeners.filter(l=> l!==listener);
//         };
//     };
//     dispatch({});
//     return {getState, dispatch, subscribe};
// }

/*const store = createStore(counter);
const Counter= ({value, onIncrement, onDecrement})=>(
    <div>
        <h1>{value}</h1>
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
    </div>
);
const render = () => {
    // document.body.innerText = store.getState();
    ReactDOM.render(<Counter value={store.getState()}
    onIncrement={()=>store.dispatch({type: 'INCREMENT'})}
    onDecrement={()=>store.dispatch({type: 'DECREMENT'})}
    />, document.getElementById('container'));
};
store.subscribe(render);
render();*/
// document.addEventListener('click', () => {
//     store.dispatch({type: 'INCREMENT'});
// });