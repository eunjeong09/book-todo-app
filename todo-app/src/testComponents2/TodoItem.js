import React from 'react';

const TodoItem = ({todo}) => {
    const {id, text, checked} = todo;
    return(
        <div>{text}</div>
    )
}
export default TodoItem;