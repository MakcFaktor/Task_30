/* eslint-disable react/prop-types */

function TodoItem({ todo }) {
  return (
    <>
      <input type="checkbox" defaultChecked={todo.checked} />
      <span className="todo-item__description">{todo.text}</span>
      <button
        onClick={() => this.context.removeTodo(todo._id)}
        className="todo-item__delete"
      >
        Видалити
      </button>
    </>
  );
}

export default TodoItem;
