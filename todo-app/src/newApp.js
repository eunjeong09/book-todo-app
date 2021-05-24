import React, { useState } from 'react';
import TodoTemplate from './newComponents/TodoTemplate';
import TodoInsert from './newComponents/TodoInsert';
import TodoList from './newComponents/TodoList';

const App = () => {
    const [todos, setTodos] = useState([
        {
            id:1,
            text:'할일 1',
            checked:true
        },
        {
            id:2,
            text:'할일 2',
            checked:true,
        },
        {
            id:3,
            text:'할일 3',
            checked:false,
        }
    ]);
    return (
        <TodoTemplate>
            <TodoInsert />
            <TodoList todos={todos} />
        </TodoTemplate>
    )
}
export default App;