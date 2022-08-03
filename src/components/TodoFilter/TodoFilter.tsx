import React from 'react';

import Button from '../Button/Button';

import styles from './TodoFilter.module.css';

import {observer} from "mobx-react-lite";

interface TodoFilterProps {
    filterAll: () => void;
    filterActive: () => void;
    filterCompleted : () => void;
    viewTodosFilter: string;
}

const TodoFilter: React.FC<TodoFilterProps> = observer((props) => {

    return (
        <div className={styles.todo_filter_container}>
            <div className={styles.button_container}>
                <div><b>{props.viewTodosFilter}</b> tasks are displayed</div>
                <Button color='blue' onClick={props.filterAll}>
                    ALL
                </Button>
                <Button color='blue' onClick={props.filterActive}>
                    ACTIVE
                </Button>
                <Button color='blue' onClick={props.filterCompleted}>
                    COMPLETED
                </Button>
            </div>
        </div>
    );
});

export default TodoFilter;