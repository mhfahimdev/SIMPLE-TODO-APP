import {
  ADDED,
  ALLCOMPLETED,
  CLEARCOMPLETED,
  TOGGLED,
  COLORSELECTED,
  DELETED,
} from "./actionTypes";

// intial state
const state = [];

function nextTodoID(todos) {
  const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
  return maxId + 1;
}

const todoReducer = (todos = state, action) => {
  switch (action.type) {
    case ADDED:
      return [
        ...todos,
        {
          id: nextTodoID(todos),
          text: action.payload,
          completed: false,
        },
      ];

    case TOGGLED:
      return todos.map((todo) => {
        if (todo.id !== action.payload) {
          return todo;
        }

        return {
          ...todo,
          completed: !todo.completed,
        };
      });

    case COLORSELECTED:
      const { todoID, color } = action.payload;
      return todos.map((todo) => {
        if (todo.id !== todoID) {
          return todo;
        }
        return {
          ...todo,
          color,
        };
      });

    case DELETED:
      return todos.filter((todo) => todo.id !== action.payload);

    case ALLCOMPLETED:
      return todos.filter((todo) => (todo.completed = !todo.completed));

    case CLEARCOMPLETED:
      return todos.filter((todo) => !todo.completed);

    default:
      return todos;
  }
};
export default todoReducer;
