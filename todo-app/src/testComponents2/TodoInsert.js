import React, { useCallback, useState } from 'react';
import { MdAdd } from "react-icons/md";

const TodoInsert = ({ onInsert }) => {
    const [value, setValue] = useState('');

    const onSubmit = useCallback(
        e => {
            onInsert(value);
            setValue('');

            e.preventDefault();
        },
        [onInsert, value],
    )

    const onChange = useCallback(
        e => {
            setValue(e.target.value);
        }, []

    )

    return (
        <form onSubmit={onSubmit}>
            <input placeholder="할일을 입력하세요" onChange={onChange} />
            <button>
                <MdAdd />
            </button>
        </form>
    )
}
export default TodoInsert;