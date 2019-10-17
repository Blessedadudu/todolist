import React from 'react';

const Todos = ({ todos, deleteTodo }) => {
    const todoList = todos.length ? (
        todos.map(todos => {
            return (
                <div className="collection-item" key={todos.id}>
                    <span style={{cursor: "pointer"}} onClick={() => {deleteTodo(todos.id)}}>{todos}</span>
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