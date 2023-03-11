import {
  ADDED,
  ALLCOMPLETED,
  CLEARCOMPLETED,
  TOGGLED,
  COLORSELECTED,
  DELETED,
} from "./actionTypes";

export const added = (todoText) => {
  return {
    type: ADDED,
    payload: todoText,
  };
};

export const allCompleted = () => {
  return {
    type: ALLCOMPLETED,
  };
};

export const clearCompleted = () => {
  return {
    type: CLEARCOMPLETED,
  };
};

export const toggoled = (id) => {
  return {
    type: TOGGLED,
    payload: id,
  };
};

export const colorSelected = (todoID, color) => {
  return {
    type: COLORSELECTED,
    payload: {
      todoID,
      color,
    },
  };
};

export const deleted = (id) => {
  return {
    type: DELETED,
    payload: id,
  };
};
