import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, onRemove, onToggle }) => {
    return (
        todos.map(todo =>
            <TodoItem key={todo.id} todo={todo} onRemove={onRemove} onToggle={onToggle} />
        )
    )
}

export default TodoList;