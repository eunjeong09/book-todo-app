import React from 'react';
import {
    MdCheckBoxOutlineBlank,
    MdCheckBox,
    MdRemoveCircleOutline,
} from 'react-icons/md';
import cn from 'classnames';

const TodoItem = ({ todo, onRemove, onToggle }) => {
    const { id, text, checked } = todo;
    return (
        <div>
            <div className={cn("checkbox", { checked })} onClick={() => onToggle(todo.id)}>
                {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
            </div>
            <div>{todo.text}</div>
            <div onClick={() => onRemove(todo.id)} >-</div>
        </div>
    )
}
export default TodoItem;