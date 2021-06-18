import React, { useCallback, useRef, useState } from 'react';
import TodoTemplate from './testComponents2/TodoTemplate';
import TodoInsert from './testComponents2/TodoInsert';
import TodoList from './testComponents2/TodoList';


const App = () => {
    const [todos, setTodos] = useState([
        { id: 1, text: '할일1', checked: true },
        { id: 2, text: '할일2', checked: true },
        { id: 3, text: '할일3', checked: true }
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

        }, [todos]
    )

    const onRemove = useCallback(
        id => {
            setTodos(todos.filter(todo => todo.id !== id));
        }, [todos]

    )



    return (
        <TodoTemplate>
            <TodoInsert onInsert={onInsert} />
            <TodoList todos={todos} onRemove={onRemove} />
        </TodoTemplate>
    )
}
export default App;