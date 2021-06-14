import React from 'react';
import { MdAdd } from "react-icons/md";

const TodoInsert = () => {
    return (
        <form>
            <input placeholder="할일을 입력하세요" />
            <button>
                <MdAdd />
            </button>
        </form>
    )
}
export default TodoInsert;