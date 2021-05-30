import React, { useState, useCallback } from 'react';
import { MdAdd } from 'react-icons/md';
import './TodoInsert.scss';

const TodoInsert = ({ onInsert }) => {
    const [value, setValue] = useState('');

    // input에 입력 시 실시간으로 텍스트 변경
    const onChange = useCallback(e => {
        setValue(e.target.value);
    }, []);

    // submit에 대한 역할은 form이 함
    const onSubmit = useCallback(e => {
        onInsert(value);
        setValue('');
        // submit의 새로고침 막기
        e.preventDefault();

    }, [onInsert, value]);

    return (
        <form className="TodoInsert" onSubmit={onSubmit} >
            <input placeholder="할 일을 입력하세요" value={value} onChange={onChange} />
            <button type="submit">
                <MdAdd />
            </button>
        </form>

    )
}
export default TodoInsert;