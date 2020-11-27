import { ADD_TODO, DELETE_TODO, READY_TODO,UPDATE_TODO } from "./actionTypes";

let nextTodoId = 0;

export const add_Todo = content => ({
  type: ADD_TODO,
  payload: {
    id: ++nextTodoId,
    content
  }
});

export const Delete_Todo = id => ({
  type: DELETE_TODO,
  payload:  id 
});

export const Ready_Todo = id => ({
  type: READY_TODO,
  payload: id 
});

export const Update_Todo = (text,todo) => ({
  type: UPDATE_TODO,
  payload: {text,todo}
});

