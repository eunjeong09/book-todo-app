import React from 'react';

const TodoTemplate = ({ children }) => {
    return (
        <div>
            <div>할 일</div>
            <div>{children}</div>
        </div>
    )
}
export default TodoTemplate;