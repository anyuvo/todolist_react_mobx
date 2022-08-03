import {makeAutoObservable} from "mobx";

class Todos {
    todos: Todo[] = [
        {id: 1, name: '1.Physical jerks', description: 'Set 1', checked: false},
        {id: 2, name: '2.Breakfast', description: 'Set 2', checked: false},
        {
            id: 3,
            name: '3.Work',
            description:
                'make a to-do list app with react-mobx-typescript-sass and make it adaptive',
            checked: true
        }
    ]

    todoIdForEdit = null as number | null;

    viewTodosFilter: 'ALL' | 'COMPLETED' | 'ACTIVE' = 'ALL';

    constructor() {
        makeAutoObservable(this)
    }

    selectTodoIdForEdit = (id: Todo['id']) => {
        this.todoIdForEdit = id;
    };

    deleteTodo = (id: Todo['id']) => {
        this.todos = this.todos.filter((todo) => todo.id !== id);
    };

    addTodo = ({name, description}: Omit<Todo, 'id' | 'checked'>) => {
        if (name) {
            this.todos = [...this.todos, {
                id: this.todos.length > 0
                    ? this.todos[this.todos.length - 1].id + 1
                    : 1,
                description,
                name,
                checked: false
            }];
        }
    };

    checkTodo = (id: Todo['id']) => {
        this.todos = this.todos.map((todo) => {
            if (todo.id === id) {
                return {...todo, checked: !todo.checked};
            }
            return todo;
        });
    };

    changeTodo = ({name, description}: Omit<Todo, 'id' | 'checked'>) => {
        this.todos = this.todos.map((todo) => {
            if (todo.id === this.todoIdForEdit) {
                return {...todo, name, description};
            }
            return todo;
        });
        this.todoIdForEdit = null;
    };

    filterAll = () => {
        // console.log(this.todos);
        this.viewTodosFilter = 'ALL';
        // return this.todos;

    }

    filterActive = () => {
        // console.log(this.todos.filter((todo) => !todo.checked));
        this.viewTodosFilter = 'ACTIVE';
        // return this.todos.filter(todo => !todo.checked);

    }

    filterCompleted = () => {
        // console.log(this.todos.filter((todo) => todo.checked));
        this.viewTodosFilter = 'COMPLETED';
        // return this.todos.filter(todo => todo.checked);

    }

    // get todosFiltered() {
    //     if (this.viewTodosFilter === 'ALL') {
    //         return this.todos;
    //     } else if (this.viewTodosFilter === 'ACTIVE') {
    //         return this.todos.filter(todo => !todo.checked);
    //     } else if (this.viewTodosFilter === 'COMPLETED') {
    //         return this.todos.filter(todo => todo.checked);
    //     }
    //
    //     return this.todos;
    // }
}

export default new Todos();