import React, { useState } from 'react';
import TodoTemplate from './testComponents2/TodoTemplate';
import TodoInsert from './testComponents2/TodoInsert';
import TodoList from './testComponents2/TodoList';


const App = () => {
    const [todos, setTodos] = useState([
        { id: 1, text: '할일1', checked:true },
        { id: 2, text: '할일2', checked:true },
        { id: 3, text: '할일3', checked:true }
    ]);



    return (
        <TodoTemplate>
            <TodoInsert />
            <TodoList todos={todos} />
        </TodoTemplate>
    )
}
export default App;