import { useState } from "react";
import { useDispatch } from "react-redux";
import { doubleTick, notes, plus } from "../images";
import { added, allCompleted, clearCompleted } from "../redux/todos/actions";

export default function TodoHeader() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (input) dispatch(added(input));
    setInput("");
  };

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleAllCompleted = () => {
    dispatch(allCompleted());
  };

  const handleClearCompleted = () => {
    dispatch(clearCompleted());
  };

  return (
    <div>
      <form
        className="flex items-center bg-gray-100 px-4 py-4 rounded-md"
        onSubmit={handleAddTodo}
      >
        <img src={notes} className="w-6 h-6" alt="Add todo" />
        <input
          type="text"
          placeholder="Type your todo"
          value={input}
          className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
          onChange={handleInput}
        />
        <button
          type="submit"
          className={`appearance-none w-8 h-8 bg-[url(${plus})] bg-no-repeat bg-contain`}
        ></button>
      </form>

      <ul className="flex justify-between my-4 text-xs text-gray-500">
        <li
          className="flex space-x-1 cursor-pointer"
          onClick={handleAllCompleted}
        >
          <img className="w-4 h-4" src={doubleTick} alt="Complete" />
          <span>Complete All Tasks</span>
        </li>
        <li className="cursor-pointer" onClick={handleClearCompleted}>
          Clear completed
        </li>
      </ul>
    </div>
  );
}
