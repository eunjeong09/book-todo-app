import React from 'react';
import { MdCheckBoxOutlineBlank, MdCheckBox } from 'react-icons/md'
import cn from 'classnames';

const TodoItem = ({ todo, onRemove, onToggle }) => {
    const { id, text, checked } = todo;
    return (
        <div className="TodoItem">
            <div className={cn('checkbox', { checked })} onClick={() => onToggle(id)}>
                {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
                <div>{text}</div>
            </div>
            <div onClick={() => onRemove(id)}>-</div>
        </div>
    )
}
export default TodoItem;