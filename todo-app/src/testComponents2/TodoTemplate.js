import React from 'react';

const TodoTemplate = ({ children }) => {
    return (
        <div id="TodoTemplate">
            <div id="title">할 일</div>
            <div>{children}</div>
        </div>
    )
}
export default TodoTemplate;