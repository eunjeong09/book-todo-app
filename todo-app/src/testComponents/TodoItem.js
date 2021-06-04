import React from 'react';
import {
    MdCheckBoxOutlineBlank,
    MdCheckBox,
    MdRemoveCircleOutline,
} from 'react-icons/md';
import cn from 'classnames';
import './TodoItem.scss';

const TodoItem = ({ todo }) => {
    const { id, text, checked } = todo;
    console.log(todo);
    return (
        <div className="TodoItem">
            <div className={cn('checkbox', { checked })}>
                {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
                <div>{text}</div>

            </div>
            <div>
                <MdRemoveCircleOutline />
            </div>
        </div >
    )
}
export default TodoItem;