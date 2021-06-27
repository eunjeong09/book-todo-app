import React, { useState, useCallback } from 'react';

const TodoInsert = ({ onInsert }) => {
    /*
        value, setValue(useState),
        onSubmit(form)
        onChange(input) 
     */
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
            setValue(e.target.value)
        },
        [],
    )


    return (
        <form onSubmit={onSubmit}>
            <input placeholder="할일을 입력하세요" onChange={onChange} value={value} />
            <button>+</button>
        </form>
    )
}

export default TodoInsert;