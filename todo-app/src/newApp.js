import React from 'react';
import TodoTemplate from './newComponents/TodoTemplate';
import TodoInsert from './newComponents/TodoInsert';
import TodoList from './newComponents/TodoList';

const App = () => {
    return (
        <TodoTemplate>
            <TodoInsert />
            <TodoList />
        </TodoTemplate>
    )
}
export default App;