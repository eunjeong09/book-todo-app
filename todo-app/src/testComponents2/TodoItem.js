import React from 'react';
import {
    MdCheckBoxOutlineBlank,
    MdCheckBox,
    MdRemoveCircleOutline,
} from 'react-icons/md';

const TodoItem = ({ todo, onRemove }) => {
    const { id, text, checked } = todo;
    return (
        <div className="TodoItem">
            <div>
                <div>{text}</div>
            </div>
            <div onClick={() => onRemove(id)}>
                <MdRemoveCircleOutline />
            </div>
        </div>
    )
}
export default TodoItem;