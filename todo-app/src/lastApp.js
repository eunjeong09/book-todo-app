import React, { useCallback, useRef, useState } from 'react';
import TodoTemplate from './finalComponents/TodoTemplate';
import TodoInsert from './finalComponents/TodoInsert';
import TodoList from './finalComponents/TodoList';

const App = () => {
    /* 
        todos, setTodos(useState)
        nextId
        onInsert(TodoInsert)
        onRemove(TodoList)
        onToggle(TodoList)
    */
    

    const [todos, setTodos] = useState(
        [{
            id: 1,
            text: '할일1',
            checked: false
        },
        {
            id: 2,
            text: '할일2',
            checked: false
        },
        {
            id: 3,
            text: '할일3',
            checked: false
        }]
    )

    const nextId = useRef(4);

    const onInsert = useCallback(
        text => {
            const todo = {
                id: nextId.current,
                text,
                checked: false
            }
            setTodos(todos.concat(todo));
            nextId.current += 1;
        },
        [todos],
    )


    const onRemove = useCallback(
        id => {
            setTodos(todos.filter(todos => todos.id != id))
        },
        [todos]
    )

    const onToggle = useCallback(
        id => {
            setTodos(
                todos.map(todo =>
                    todo.id === id ? { ...todo, checked: !todo.checked } : todo,
                ),
            );
        },
        [todos],
    );



    return (
        <TodoTemplate>
            <TodoInsert onInsert={onInsert} />
            <TodoList onRemove={onRemove} onToggle={onToggle} todos={todos} />
        </TodoTemplate>

    )
}
export default App;