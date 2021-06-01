import React from 'react';
import TodoTemplate from './testComponents/TodoTemplate';
import TodoInsert from './testComponents/TodoInsert';
import TodoList from './testComponents/TodoList';

const App = () => {
    return (
        <TodoTemplate>
            <TodoInsert />
            <TodoList />

        </TodoTemplate>

    );

}
export default App;

