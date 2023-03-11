import { useDispatch, useSelector } from "react-redux";
import { statusChanged, colorChanged } from "../redux/filters/action";

const numberOfTodo = (no_of_todo) => {
  switch (no_of_todo) {
    case 0:
      return "No task";
    case 1:
      return "1 Task";
    default:
      return `${no_of_todo} tasks`;
  }
};

export default function Footer() {
  const todos = useSelector((state) => state.todos);
  const filters = useSelector((state) => state.filters);
  const dispatch = useDispatch();

  const { status, colors } = filters;

  const tasksLeft = todos.filter((todo) => !todo.completed).length;

  const handleStatus = (status) => {
    dispatch(statusChanged(status));
  };

  const handleChangeColor = (color) => {
    if (colors.includes(color)) {
      dispatch(colorChanged(color, "removed"));
    } else {
      dispatch(colorChanged(color, "added"));
    }
  };

  return (
    <div className="mt-4 flex justify-between text-xs text-gray-500">
      <p>{numberOfTodo(tasksLeft)} left</p>
      <ul className="flex space-x-1 items-center text-xs">
        <li
          className={`${status.status === "all" && "font-bold"} cursor-pointer`}
          onClick={() => handleStatus("all")}
        >
          All
        </li>
        <li>|</li>
        <li
          className={`${
            status.status === "incomplete" && "font-bold"
          } cursor-pointer`}
          onClick={() => handleStatus("incomplete")}
        >
          Incomplete
        </li>
        <li>|</li>
        <li
          className={`${
            status.status === "complete" && "font-bold"
          } cursor-pointer`}
          onClick={() => handleStatus("complete")}
        >
          Complete
        </li>
        <li
          className={`h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer ${
            colors.includes("green") && "bg-green-500"
          }`}
          onClick={() => handleChangeColor("green")}
        ></li>
        <li
          className={`h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer ${
            colors.includes("red") && "bg-red-500"
          }`}
          onClick={() => handleChangeColor("red")}
        ></li>
        <li
          className={`h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer ${
            colors.includes("yellow") && "bg-yellow-500"
          }`}
          onClick={() => handleChangeColor("yellow")}
        ></li>
      </ul>
    </div>
  );
}
