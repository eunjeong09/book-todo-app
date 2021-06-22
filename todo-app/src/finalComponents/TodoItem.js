import React from 'react';
import cn from 'classnames';

const TodoItem = ({todo, onRemove}) => {
    return (
        <div>
            <div >
                체크박스
            </div>
            <div>{todo.text}</div>
            <div onClick={() => onRemove(todo.id)} >-</div>
        </div>
    )
}
export default TodoItem;