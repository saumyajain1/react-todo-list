export function TodoItem({completed, id, title, toggleTodo, deleteTodo}){
    return (
        <li>
          <label>
            <input
              type="checkbox"
              checked={completed}
              onChange={(event) =>
                toggleTodo(id, event.target.checked)
              }
            ></input>
            {title}
          </label>
          <button
            className="btn btn-danger"
            onClick={() => deleteTodo(id)}
          >
            Delete
          </button>
        </li>
      );
}