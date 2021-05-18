import React from 'react';
import TodoTemplate from './newComponents/TodoTemplate';
import TodoInsert from './newComponents/TodoInsert';

const App = () => {
    return (
        <TodoTemplate>
            <TodoInsert />
        </TodoTemplate>
    )
}
export default App;