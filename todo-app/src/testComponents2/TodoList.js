import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos }) => {
    console.log(todos);
    return (
        <div>
            {todos.map(
                todo => <TodoItem key={todo.id}></TodoItem>
            )}
        </div>
    )
}
export default TodoList;