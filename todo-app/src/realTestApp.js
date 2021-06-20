import React, { useCallback, useRef, useState } from 'react';
import TodoTemplate from './realTestComponents/TodoTemplate';
import TodoInsert from './realTestComponents/TodoInsert';
import TodoList from './realTestComponents/TodoList';

/*
App 
-> useState(todos, setTodos)
-> nextId
-> onInsert
-> onRemove
-> onToggle

TodoTemplate : 전체감싸기
TodoInsert
-> useState(value, setValue)
-> onChange
-> onSubmit


*/

const App = () => {
    const [todos, setTodos] = useState([
        {
            id: 1,
            text: '할일1',
            checked: true
        },
        {
            id: 2,
            text: '할일2',
            checked: true
        },
        {
            id: 3,
            text: '할일3',
            checked: true
        }
    ]);

    const nextId = useRef(4);

    //onInsert
    const onInsert = useCallback(text => {
        const todo = {
            id: nextId.current,
            text,
            checked: false
        }
        setTodos(todos.concat(todo));
        nextId.current += 1;
    }, [todos]

    );

    //onRemove
    const onRemove = useCallback(id => {
        setTodos(todos.filter(todo => todo.id !== id));
    }, [todos]

    )

    //onToggle
    const onToggle = useCallback(id => {
        setTodos(
            todos.map(todo =>
                todo.id === id ? { ...todo, checked: !todo.checked } : todo
            )
        )
        console.log(id);
    }

    )

    return (
        <TodoTemplate>
            <TodoInsert onInsert={onInsert} />
            <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
        </TodoTemplate>
    )
}
export default App;