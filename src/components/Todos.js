import React from 'react';
import './Todo.css';

const Todos = ({ todos, deleteTodo }) => {
    const todoList = todos.length ? (
        todos.map(todos => {
            return (
                <div className="collection-item" key={todos.id}>
                    <span>{todos.content}</span>
                    <span style={{cursor: "pointer"}} onClick={() => {deleteTodo(todos.id)}}><i class="fas fa-window-close"></i></span>
                </div>
            )
        })
    ) : (
            <p className="center collection-item">You don't have anything to do right now !!!</p>
    )
    return (
        <div className="todos collection">
            {todoList}
        </div>
    )
}

export default Todos;