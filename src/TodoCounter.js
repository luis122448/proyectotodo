import React from "react";
import { TodoContext } from "./TodoContext";

function TodoCounter() {
    const { totalTodos, completedTodos } = React.useContext(TodoContext);
    return  (
        <React.Fragment>
            <h2 className="main__count">{totalTodos} Pendientes</h2>
            <h2 className="main__count">{completedTodos} Completados</h2>
        </React.Fragment>
    )
}

export { TodoCounter };