import React, { useRef, useState, useCallback } from 'react';
import TodoTemplate from './testComponents/TodoTemplate';
import TodoInsert from './testComponents/TodoInsert';
import TodoList from './testComponents/TodoList';

const App = () => {
    const [todos, setTodos] = useState([
        {
            id: 1,
            text: '할일1',
            checked: true,
        }, {
            id: 2,
            text: '할일2',
            checked: false
        },
        {
            id: 3,
            text: '할일3',
            checked: false
        }
    ]);

    const nextId = useRef(4);
    const onInsert = useCallback(
        text => {
            const todo = {
                id: nextId.current,
                text,
                checked: false
            };
            setTodos(todos.concat(todo));
            nextId.current += 1;
        },
        [todos],
    )

    return (
        <TodoTemplate>
            <TodoInsert onInsert={onInsert} />
            <TodoList todos={todos} />

        </TodoTemplate>

    );

}
export default App;

