import React, { useCallback, useState } from 'react';
import { MdAdd } from "react-icons/md";

const TodoInsert = ({ onInsert }) => {
    const [value, setValue] = useState('');

    const onSubmit = useCallback(
        e => {
            e.preventDefault();
            console.log('submit');
        },
        [onInsert, value],
    )

    return (
        <form onSubmit={onSubmit}>
            <input placeholder="할일을 입력하세요" />
            <button>
                <MdAdd />
            </button>
        </form>
    )
}
export default TodoInsert;