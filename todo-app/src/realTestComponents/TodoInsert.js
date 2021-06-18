import React, { useCallback, useState } from 'react';


const TodoInsert = ({ onInsert }) => {
    const [value, setValue] = useState('');


    //onChange
    const onChange = useCallback(
        e => {
            setValue(e.target.value);
        }, []

    )

    //onSubmit
    const onSubmit = useCallback(
        e => {
            onInsert(value);
            setValue('');
            e.preventDefault();
        },
        [onInsert, value]
    )


    return (
        <form className="TodoInsert" onSubmit={onSubmit}>
            <input placeholder="할일을 입력하세요" onChange={onChange} value={value} />
            <button type='submit'>+</button>
        </form>
    )
}
export default TodoInsert;