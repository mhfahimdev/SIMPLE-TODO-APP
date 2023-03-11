import { useSelector } from "react-redux";
import Todo from "./Todo";

export default function TodoList() {
  const todos = useSelector((state) => state.todos);
  const filters = useSelector((state) => state.filters);

  const filterByStatus = (todo) => {
    const { status = status } = filters;

    switch (status.status) {
      case "complete":
        return todo.completed;
      case "incomplete":
        return !todo.completed;

      default:
        return todo;
    }
  };

  const filterByColors = (todo) => {
    const { colors } = filters;

    if (colors.length > 0) {
      return colors.includes(todo?.color);
    }
    return todo;
  };

  return (
    <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
      {todos
        .filter(filterByStatus)
        .filter(filterByColors)
        .map((todo) => {
          return <Todo todo={todo} key={todo.id} />;
        })}
    </div>
  );
}
