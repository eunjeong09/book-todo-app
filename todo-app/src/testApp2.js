import React from 'react';
import TodoTemplate from './testComponents2/TodoTemplate';
import TodoInsert from './testComponents2/TodoInsert';
import TodoList from './testComponents2/TodoList';


const App = () => {
    return(
        <TodoTemplate>
            <TodoInsert />
            <TodoList />
        </TodoTemplate>
    )
}
export default App;