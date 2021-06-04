import React from 'react';
import './TodoTemplate.scss';

/**
 * Todo를 반환하는 메소드
 * @param {object} children symbol()
 * @returns {object} TodoTemplate 객체
 */
const TodoTemplate = ({ children }) => {
    return (
        <div className="TodoTemplate">
            <div className="app-title">일정 관리</div>
            <div className="content">{children}</div>
        </div>
    )
}

export default TodoTemplate;