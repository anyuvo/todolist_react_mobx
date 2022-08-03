import React from 'react';
import styles from './App.module.css';

import Header from './components/Header/Header';
import TodoPanel from "./components/TodoPanel/TodoPanel";
import TodoList from "./components/TodoList/TodoList";
import {observer} from "mobx-react-lite";
import todosM from './store/todo';

const App = () => {

    return (
        <div className={styles.app_container}>
            <div className={styles.container}>
                <Header todoCount={todosM.todos.length}/>
                <TodoPanel mode='add' addTodo={todosM.addTodo}/>
                <TodoList
                    todoIdForEdit={todosM.todoIdForEdit}
                    todos={todosM.todos}
                    deleteTodo={todosM.deleteTodo}
                    checkTodo={todosM.checkTodo}
                    selectTodoIdForEdit={todosM.selectTodoIdForEdit}
                    changeTodo={todosM.changeTodo}
                />
            </div>
        </div>
    );
}

export default observer(App);
