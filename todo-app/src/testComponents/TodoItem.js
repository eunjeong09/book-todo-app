import React from 'react';
import {
    MdCheckBoxOutlineBlank,
    MdCheckBox,
    MdRemoveCircleOutline,
} from 'react-icons/md';
import cn from 'classnames';

const TodoItem = () => {
    return (
        <div className="TodoItem">
            <div>
                {/* {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />} */}
                <div>todoItem</div>

            </div>
            <div>
                <MdRemoveCircleOutline />
            </div>
        </div>
    )
}
export default TodoItem;