import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, onRemove, onToggle }) => {
    return (
        <div>
            {todos.map(
                todo => <TodoItem key={todo.id} todo={todo} onRemove={onRemove} onToggle={onToggle}></TodoItem>
            )}
        </div>
    )
}
export default TodoList;