import React, { useCallback, useRef, useState } from 'react';
import TodoTemplate from './newComponents/TodoTemplate';
import TodoInsert from './newComponents/TodoInsert';
import TodoList from './newComponents/TodoList';

const App = () => {
    const [todos, setTodos] = useState([
        {
            id: 1,
            text: '할일 1',
            checked: true
        },
        {
            id: 2,
            text: '할일 2',
            checked: true,
        },
        {
            id: 3,
            text: '할일 3',
            checked: false,
        }
    ]);

    const nextId = useRef(4);
    const onInsert = useCallback(
        text => {
            const todo = {
                id: nextId.current,
                text,
                checked: false,
            };
            setTodos(todos.concat(todo));
            nextId.current += 1;
        }, [todos],
    );
    return (
        <TodoTemplate>
            <TodoInsert onInsert={onInsert}/>
            <TodoList todos={todos} />
        </TodoTemplate>
    )
}
export default App;