import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, onRemove }) => {
    return (
        <div>
            {todos.map(
                todo => <TodoItem key={todo.id} todo={todo} onRemove={onRemove} ></TodoItem>
            )}
        </div>
    )
}
export default TodoList;